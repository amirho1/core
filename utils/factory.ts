import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

export default function factory(next: NextMiddleware): NextMiddleware {
  return (req: NextRequest, event: NextFetchEvent) => {
    return next(req, event);
  };
}
