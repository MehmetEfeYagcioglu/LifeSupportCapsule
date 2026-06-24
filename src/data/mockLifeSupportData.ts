import type { LifeSupportData } from "../types/lifeSupport";

export const mockLifeSupportData: LifeSupportData = {
  air: {
    temperature: 22,
    humidity: 61,
  },
  water: {
    level: 74,
  },
  soil: {
    moisture: 58,
  },
  systemStatus: "ONLINE",
  updatedAt: Date.now(),
};
