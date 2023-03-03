import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: {
    me: boolean;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    res.json({ data: { me: true } });
  }
}
