"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<"success" | "error"> {
    let cookiestore = await cookies();
    cookiestore.delete("DO_NOT_SHARE_TOKEN");

    return "success";
    
}