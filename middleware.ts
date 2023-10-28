import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhook",
    "/community",
    "/tags",
    "/question/:id",
    "/tags/:id",
    "/profile/:id",
  ],
  ignoredRoutes: ["/api/webhook", "/api/chatgpt", "/jobs"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
