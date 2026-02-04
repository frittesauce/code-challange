"use client";
import { redirect } from "next/navigation";
import { TopBarButton } from "./topbarButton";
import { logout } from "@/app/auth/actions";
import { useEffect } from "react";

export default function TopBar() {
  let isLoggedIn = null;

  useEffect(() => {
    isLoggedIn = localStorage.getItem("DO_NOT_SHARE_TOKEN");
  });

  async function handleLogout() {
    const status = await logout();
    if (status === "success") {
      localStorage?.removeItem("DO_NOT_SHARE_TOKEN");
      redirect("/");
    }
  }

  return (
    <div className="w-full flex items-center relative p-2">
      <h1 className=" text-4xl font-semibold">
        <span className=" text-ctp-mauve-400">Event</span> Bird!
      </h1>
      {/* <div className="absolute left-1/2 flex flex-row gap-2 ml-auto mr-auto self-center"> */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-2">
        <TopBarButton
          onClick={() => {
            redirect("/");
          }}
        >
          Home
        </TopBarButton>
        {isLoggedIn ? (
          <>
            <TopBarButton onClick={() => redirect("/home/events")}>
              Events
            </TopBarButton>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="ml-auto">
        {isLoggedIn ? (
          <TopBarButton onClick={handleLogout}>Logout</TopBarButton>
        ) : (
          <TopBarButton onClick={() => redirect("/auth/signIn")}>
            Login
          </TopBarButton>
        )}
      </div>
    </div>
  );
}
