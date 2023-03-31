import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import prisma from "lib/db";

import { comparePassword } from "lib/encrypt";

export const authOptions = {
  // confiures how the session will be managed
  session: {
    // allowing JSON Web Token
    jwt: true,
  },

  // Configure one or more authentication providers
  providers: [
    Credentials({
      async authorize(credentials) {
        await prisma.$connect();
        // connect to user table

        // .findOne where username: credentials.username
        // if false throw error (not authorized)
        const isUser = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!isUser) {
          await prisma.$disconnect();
          throw new Error("No user found");
        }

        // await comparePassword(credentials.password, .findOne(username))
        // if password is not valid throw err (not authorized)
        const isPassword = await comparePassword(
          credentials.password,
          isUser.password
        );

        if (!isPassword) {
          await prisma.$disconnect();
          throw new Error("Could not log you in");
        }
        // return {} -> object will be data within the token
        await prisma.$disconnect();
        return { email: isUser.email };
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
