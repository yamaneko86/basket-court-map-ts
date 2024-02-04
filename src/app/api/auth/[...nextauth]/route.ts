import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
