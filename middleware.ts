import chain from "./middlewares/chain";
import internationalization from "./middlewares/internationalization";

export default chain([internationalization]);

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
