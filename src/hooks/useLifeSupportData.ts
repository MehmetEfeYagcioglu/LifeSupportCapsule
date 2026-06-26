import { useEffect, useState } from "react";

import { mockLifeSupportData } from "../data/mockLifeSupportData";
import { isFirebaseConfigured, realtimeDatabase } from "../lib/firebase";
import {
  getMockLifeSupportData,
  subscribeToLifeSupportData,
} from "../lib/lifeSupportService";
import type { LifeSupportData } from "../types/lifeSupport";

type UseLifeSupportDataResult = {
  data: LifeSupportData | null;
  isUsingMockData: boolean;
  isLoading: boolean;
  errorMessage: string | null;
};

export function useLifeSupportData(): UseLifeSupportDataResult {
  const [data, setData] = useState<LifeSupportData | null>(
    isFirebaseConfigured ? null : mockLifeSupportData,
  );
  const [isUsingMockData, setIsUsingMockData] = useState(!isFirebaseConfigured);
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!realtimeDatabase) {
      setData(getMockLifeSupportData());
      setIsUsingMockData(true);
      setIsLoading(false);
      setErrorMessage(null);
      return;
    }

    const unsubscribe = subscribeToLifeSupportData(
      realtimeDatabase,
      (nextData, isLiveData) => {
        setData(nextData);
        setIsUsingMockData(!isLiveData);
        setIsLoading(false);
        setErrorMessage(null);
      },
      () => {
        setData(getMockLifeSupportData());
        setIsUsingMockData(true);
        setIsLoading(false);
        setErrorMessage(null);
      },
    );

    return unsubscribe;
  }, []);

  return {
    data,
    isUsingMockData,
    isLoading,
    errorMessage,
  };
}
