import { useEffect, useState } from "react";

import { mockLifeSupportData } from "../data/mockLifeSupportData";
import { isFirebaseConfigured, realtimeDatabase } from "../lib/firebase";
import {
  getMockLifeSupportData,
  subscribeToLifeSupportData,
} from "../lib/lifeSupportService";
import type { LifeSupportData } from "../types/lifeSupport";

type UseLifeSupportDataResult = {
  data: LifeSupportData;
  isUsingMockData: boolean;
  errorMessage: string | null;
};

export function useLifeSupportData(): UseLifeSupportDataResult {
  const [data, setData] = useState<LifeSupportData>(mockLifeSupportData);
  const [isUsingMockData, setIsUsingMockData] = useState(!isFirebaseConfigured);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!realtimeDatabase) {
      setData(getMockLifeSupportData());
      setIsUsingMockData(true);
      setErrorMessage(null);
      return;
    }

    const unsubscribe = subscribeToLifeSupportData(
      realtimeDatabase,
      (nextData) => {
        setData(nextData);
        setIsUsingMockData(false);
        setErrorMessage(null);
      },
      () => {
        setData(getMockLifeSupportData());
        setIsUsingMockData(true);
        setErrorMessage("Firebase unavailable, displaying mock telemetry.");
      },
    );

    return unsubscribe;
  }, []);

  return {
    data,
    isUsingMockData,
    errorMessage,
  };
}
