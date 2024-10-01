// pages/api/tracking.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const trackingData = req.body;
    return res
      .status(200)
      .json({ message: "Tracking data received", trackingData });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
