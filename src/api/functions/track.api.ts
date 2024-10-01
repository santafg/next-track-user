import { ITrackingApiRes, ITrackingData } from "@/intrefaces/track.interface";
import { endpoints } from "../endpoints";
import ApiReq from "../axiosinstance";

export const trackApiFunction = async (
  body: ITrackingData
): Promise<ITrackingApiRes> => {
  const { data } = await ApiReq.post(endpoints.user.track, body);
  return data;
};
