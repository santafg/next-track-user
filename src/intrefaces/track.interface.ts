export interface ITrackingData {
  user_id: string | undefined;
  timestamp: string;
  activity_type: string;
  page_name: string;
  additional_info: {
    device_info: {
      device_type: string;
      browser_name: string;
    };
  };
}

export interface ITrackingApiRes {
  trackingData?: ITrackingData;
  message: string;
}
