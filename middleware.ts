import { withAuth } from "next-auth/middleware";

const middleware = withAuth({
  pages: {
    signIn: "/admin/login",
  },
});

export default middleware;

export const config = {
  matcher: ["/admin", "/admin/leads/:path*", "/admin/profile"],
};
