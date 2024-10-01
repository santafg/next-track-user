import { trackApiFunction } from "@/api/functions/track.api";
import { ITrackingData } from "@/intrefaces/track.interface";
import { useMutation } from "@tanstack/react-query";
import { getDeviceInfo } from "../utils/deviceInfo";
import { useRouter } from "next/router";

export const useTrackEvent = () => {
  const router = useRouter();

  const { isError, isPending, error, mutate } = useMutation({
    mutationKey: ["track_page"],
    mutationFn: trackApiFunction,
  });

  const trackEvent = (activityType: string, url?: string) => {
    const deviceInfo = getDeviceInfo();

    const trackingData: ITrackingData = {
      user_id: "123456",
      timestamp: new Date().toISOString(),
      activity_type: activityType,
      page_name: url ? url : router.pathname,
      additional_info: {
        device_info: deviceInfo,
      },
    };

    mutate(trackingData);
  };

  return {
    trackEvent,
    isPending,
    isError,
    error,
  };
};
