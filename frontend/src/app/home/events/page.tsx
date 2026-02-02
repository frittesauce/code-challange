"use client";

import { fetchEvents } from "@/queries";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    status,
    error,
    data: events,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (status == "pending") return <p>loading</p>;
  if (status == "error") return <p>error {JSON.stringify(error)}</p>;

  return (
    <div>
      <p>event page!</p>
      <p>{JSON.stringify(events)}</p>
    </div>
  );
}
