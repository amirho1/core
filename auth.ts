import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { TypeORMAdapter } from "@auth/typeorm-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: TypeORMAdapter(process.env.DATABASE_URL || ""),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
});

