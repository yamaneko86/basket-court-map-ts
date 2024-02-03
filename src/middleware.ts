import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      return token?.role === "admin";
    },
  },

  pages: {
    signIn: "/login",
  },
});

export const config = {
  // register・api・loginはリダイレクト対象から外す
  matcher: ["/((?!register|api|login).*)"],
};
