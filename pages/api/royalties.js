import { API_URL } from "config";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { arpNumber } = req.body;

    const royaltyRequest = await fetch(
      `${API_URL}/royalties?arpNumber=${arpNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const royaltyResponse = await royaltyRequest.json();

    if (royaltyRequest.ok) {
      const notClaimed = royaltyResponse.filter(
        (item) => item.claim_request == null || item.claim_request == undefined
      );

      if (notClaimed.length > 0) {
        const getAllAuthorEarnings = notClaimed.map(
          (item) => item?.authorEarning
        );

        const total = getAllAuthorEarnings.reduce(
          (prev, current) => parseFloat(prev) + parseFloat(current)
        );

        res.status(200).json(parseFloat(total).toFixed(2));
      } else {
        res.status(200).json(0);
      }
    } else {
      res.status(royaltyResponse.statusCode).json({ message: data.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
