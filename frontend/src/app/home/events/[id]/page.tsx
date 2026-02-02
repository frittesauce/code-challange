"use client";

import { fetchEvents } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const {
    status,
    error,
    data: events,
  } = useQuery({ queryKey: ["events"], queryFn: fetchEvents });

  return (
    <div>
      <p>event page!</p>
    </div>
  );
}
