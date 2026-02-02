import { Providers } from "@/components/providers";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLoggedIn = (await cookies()).get("DO_NOT_SHARE_TOKEN");

  if (!isLoggedIn) return redirect("/auth/signIn");

  return <Providers>{children}</Providers>;
}
