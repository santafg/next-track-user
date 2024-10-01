import { useRouter } from "next/router";
import { useEffect, useCallback, useRef, useState } from "react";
import { useTrackEvent } from "@/lib/hooks/useTrackEvent";

const TrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const { trackEvent } = useTrackEvent();

  const handleRouteChangeStart = useCallback(
    (url: string) => {
      if (url !== router.asPath) {
        trackEvent("redirection", url);
      }
    },
    [router.asPath, trackEvent]
  );

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [handleRouteChangeStart, router.events]);

  const hasTrackedVisit = useRef(false);
  const [currentRoute, setCurrentRoute] = useState("/");

  useEffect(() => {
    if (!hasTrackedVisit.current) {
      trackEvent("visit_page", router.asPath);
      setCurrentRoute(router.asPath);
      hasTrackedVisit.current = true;
    }
    const handleRouteChange = (url: string) => {
      if (url !== currentRoute) {
        trackEvent("visit_page", url);
        setCurrentRoute(url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [trackEvent, router.events, router.asPath, currentRoute]);

  return <>{children}</>;
};

export default TrackingProvider;
