import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const isLoggedIn = (await cookies()).get("DO_NOT_SHARE_TOKEN");
  return isLoggedIn ? (
    <div>
      <p>you are logged in!</p>
    </div>
  ) : (
    redirect("/")
  );
}
