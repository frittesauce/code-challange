import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = (await cookies()).get("DO_NOT_SHARE_TOKEN");
  return !isLoggedIn ? { children } : redirect("/");
}
