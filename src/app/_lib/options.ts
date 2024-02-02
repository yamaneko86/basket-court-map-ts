import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // TODO supabase関数でUsersから取得
        const users = [
          { id: "1", email: "user1@example.com", password: "password1" },
          { id: "2", email: "user2@example.com", password: "password2" },
          { id: "3", email: "abc@abc", password: "123" },
        ];

        const user = users.find((user) => user.email === credentials?.email);

        if (user && user?.password === credentials?.password) {
          return {
            id: user.id,
            name: user.email,
            email: user.email,
            role: "admin",
          };
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      console.log("in session", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role, // tokenの値をコピーしとく
        },
      };
    },
  },
};
