export type GasMetrics = {
  value: number;
};

export type SoilMetrics = {
  moisture: number;
};

export type TemperatureMetrics = {
  value: number;
};

export type HumidityMetrics = {
  value: number;
};

export type RainMetrics = {
  level: number;
};

export type LightMetrics = {
  level: number;
};

export type SystemStatus = "ONLINE" | "OFFLINE" | "MAINTENANCE";

export type LifeSupportData = {
  gas: GasMetrics;
  soil: SoilMetrics;
  temperature: TemperatureMetrics;
  humidity: HumidityMetrics;
  rain: RainMetrics;
  light: LightMetrics;
  systemStatus?: SystemStatus;
  updatedAt?: number;
};
