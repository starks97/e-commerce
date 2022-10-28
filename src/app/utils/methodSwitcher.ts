import { type NextApiRequest, type NextApiResponse } from "next";

export type MethodSwitcherMethods =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "TRACE"
  | "CONNECT"
  | "ANY";

export type IMethodSwitcher<R0 extends NextApiRequest> = {
  [P in MethodSwitcherMethods]?: <R1 extends R0 = R0>(
    req: R1,
    res: NextApiResponse
  ) => Promise<void> | void;
};

export default function methodSwitcher<R extends NextApiRequest>(
  switcher: IMethodSwitcher<R>
) {
  const anyHandler = switcher.ANY;

  return async (req: R, res: NextApiResponse) => {
    const method = req.method?.toUpperCase() as MethodSwitcherMethods;
    const handler = switcher[method];

    if (handler) {
      await handler(req, res);
      return;
    } else if (anyHandler) {
      await anyHandler(req, res);
      return;
    }

    res.status(405).json({
      statusCode: 405,
      message: "Method Not Allowed",
    });
  };
}
