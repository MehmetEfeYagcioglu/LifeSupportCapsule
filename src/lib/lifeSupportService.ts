import {
  onValue,
  ref,
  type Database,
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
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function normalizeLifeSupportPayload(payload: unknown): LifeSupportData {
  const record = payload && typeof payload === "object" ? payload : {};
  const source = record as Partial<LifeSupportData>;

  return {
    air: {
      temperature: normalizeNumber(
        source.air?.temperature,
        mockLifeSupportData.air.temperature,
      ),
      humidity: clampPercentage(
        normalizeNumber(source.air?.humidity, mockLifeSupportData.air.humidity),
      ),
    },
    water: {
      level: clampPercentage(
        normalizeNumber(source.water?.level, mockLifeSupportData.water.level),
      ),
    },
    soil: {
      moisture: clampPercentage(
        normalizeNumber(
          source.soil?.moisture,
          mockLifeSupportData.soil.moisture,
        ),
      ),
    },
    systemStatus: normalizeSystemStatus(source.systemStatus),
    updatedAt: normalizeNumber(source.updatedAt, Date.now()),
  };
}

export function subscribeToLifeSupportData(
  database: Database,
  onData: (data: LifeSupportData) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  const rootRef = ref(database, LIFE_SUPPORT_ROOT);

  return onValue(
    rootRef,
    (snapshot) => {
      onData(normalizeLifeSupportPayload(snapshot.val()));
    },
    (error) => {
      onError?.(error);
    },
  );
}

export function getMockLifeSupportData() {
  return normalizeLifeSupportPayload(mockLifeSupportData);
}
