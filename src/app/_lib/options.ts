import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Sign in",
      credentials: {
        user_id: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },

      // ユーザID認証
      async authorize(credentials) {
        // TODO supabase関数でUsersから取得
        const users = [
          {
            user_id: "taro001",
            user_name: "Taro",
            email: "user1@example.com",
            password: "password1",
          },
          {
            user_id: "jiro002",
            user_name: "Jiro",
            email: "user2@example.com",
            password: "password2",
          },
          {
            user_id: "saburo003",
            user_name: "Saburo",
            email: "user3@example.com",
            password: "password3",
          },
        ];

        const user = users.find(
          (user) => user.user_id === credentials?.user_id
        );

        if (user && user?.password === credentials?.password) {
          return {
            id: user.user_id,
            name: user.user_name,
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
    jwt: async ({ token, user, account }) => {
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
      token.accessToken;
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
