import { NextMiddleware, NextResponse } from "next/server";

type Factory = (next: NextMiddleware) => NextMiddleware;

export default function chain(middlewares: Factory[], index = 0): NextMiddleware {
  const current = middlewares[index];

  if (current) {
    const next = chain(middlewares, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}
