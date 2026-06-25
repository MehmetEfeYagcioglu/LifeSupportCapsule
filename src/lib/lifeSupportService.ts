import {
  onValue,
  ref,
  type Database,
  type DataSnapshot,
  type Unsubscribe,
} from "firebase/database";

import { mockLifeSupportData } from "../data/mockLifeSupportData";
import type { LifeSupportData, SystemStatus } from "../types/lifeSupport";

const LIFE_SUPPORT_ROOT = "lifeSupport";

function clampPercentage(value: number) {
  return Math.max(0, Math.min(100, value));
}

function normalizeSystemStatus(status: unknown): SystemStatus {
  if (status === "OFFLINE" || status === "MAINTENANCE") {
    return status;
  }

  return "ONLINE";
}

function normalizeNumber(value: unknown, fallback: number) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
}

function normalizeOptionalNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);

    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return undefined;
}

function getNestedValue(source: unknown, path: string[]) {
  let current = source;

  for (const key of path) {
    if (!current || typeof current !== "object") {
      return undefined;
    }

    current = (current as Record<string, unknown>)[key];
  }

  return current;
}

function pickFirstNumericValue(
  source: unknown,
  paths: string[][],
  fallback: number,
) {
  for (const path of paths) {
    const value = getNestedValue(source, path);
    const normalized = normalizeOptionalNumber(value);

    if (normalized !== undefined) {
      return normalized;
    }
  }

  return fallback;
}

function normalizeLifeSupportPayload(
  payload: unknown,
  useMockFallbacks = true,
): LifeSupportData {
  const record = payload && typeof payload === "object" ? payload : {};
  const source = record as Partial<LifeSupportData>;
  const missingValue = Number.NaN;

  return {
    gas: {
      value: normalizeNumber(
        source.gas?.value,
        useMockFallbacks ? mockLifeSupportData.gas.value : missingValue,
      ),
    },
    soil: {
      moisture: clampPercentage(
        normalizeNumber(
          source.soil?.moisture,
          useMockFallbacks ? mockLifeSupportData.soil.moisture : missingValue,
        ),
      ),
    },
    temperature: {
      value: normalizeNumber(
        source.temperature?.value,
        useMockFallbacks ? mockLifeSupportData.temperature.value : missingValue,
      ),
    },
    humidity: {
      value: clampPercentage(
        normalizeNumber(
          source.humidity?.value,
          useMockFallbacks ? mockLifeSupportData.humidity.value : missingValue,
        ),
      ),
    },
    rain: {
      level: clampPercentage(
        normalizeNumber(
          source.rain?.level,
          useMockFallbacks ? mockLifeSupportData.rain.level : missingValue,
        ),
      ),
    },
    light: {
      level: clampPercentage(
        pickFirstNumericValue(
          source,
          [
            ["light"],
            ["light", "level"],
            ["light", "value"],
            ["ldr"],
            ["ldr", "light"],
            ["ldr", "level"],
            ["ldr", "value"],
            ["isik"],
            ["isik", "level"],
            ["isik", "value"],
            ["isikYuzdesi"],
            ["lightLevel"],
          ],
          useMockFallbacks ? mockLifeSupportData.light.level : missingValue,
        ),
      ),
    },
    systemStatus: normalizeSystemStatus(source.systemStatus),
    updatedAt: normalizeOptionalNumber(source.updatedAt),
  };
}

function hasUsableLifeSupportData(snapshot: DataSnapshot) {
  const value = snapshot.val();

  return value !== null && typeof value === "object";
}

function extractLifeSupportSource(snapshotValue: unknown) {
  if (!snapshotValue || typeof snapshotValue !== "object") {
    return mockLifeSupportData;
  }

  const record = snapshotValue as Record<string, unknown>;
  const nestedLifeSupport = record[LIFE_SUPPORT_ROOT];

  if (nestedLifeSupport && typeof nestedLifeSupport === "object") {
    return nestedLifeSupport;
  }

  return snapshotValue;
}

export function subscribeToLifeSupportData(
  database: Database,
  onData: (data: LifeSupportData, isLiveData: boolean) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  const rootRef = ref(database, "/");

  return onValue(
    rootRef,
    (snapshot) => {
      const rawValue = snapshot.val();
      const payload = extractLifeSupportSource(rawValue);
      const isLiveData =
        payload !== mockLifeSupportData &&
        payload !== null &&
        typeof payload === "object";

      onData(normalizeLifeSupportPayload(payload, !isLiveData), isLiveData);
    },
    (error) => {
      onError?.(error);
    },
  );
}

export function getMockLifeSupportData() {
  return normalizeLifeSupportPayload(mockLifeSupportData);
}
