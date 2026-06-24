export type AirMetrics = {
  temperature: number;
  humidity: number;
};

export type WaterMetrics = {
  level: number;
};

export type SoilMetrics = {
  moisture: number;
};

export type SystemStatus = "ONLINE" | "OFFLINE" | "MAINTENANCE";

export type LifeSupportData = {
  air: AirMetrics;
  water: WaterMetrics;
  soil: SoilMetrics;
  systemStatus?: SystemStatus;
  updatedAt?: number;
};
