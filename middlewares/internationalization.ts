import i18nConfig from "@/i18nConfig";
import { i18nRouter } from "next-i18n-router";
import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

export default function internationalization(next: NextMiddleware) {
  return function (req: NextRequest, event: NextFetchEvent) {

    return i18nRouter(req, i18nConfig);
  };
}
