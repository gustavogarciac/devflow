import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/community"],
  ignoredRoutes: [
    "/api/webhook",
    "/api/chatgpt",
    "/question/:id",
    "/tags",
    "/tags/:id",
    "/profile/:id",
    "/jobs",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
