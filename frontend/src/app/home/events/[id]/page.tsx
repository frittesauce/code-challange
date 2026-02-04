"use client";

import { Error } from "@/components/ui/error";
import { Loading } from "@/components/ui/loading";
import { fetchEvent } from "@/queries";
import { EventPageProps } from "@/types/components/events";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

export default function EventPage({ params }: EventPageProps) {
  const eventId = use(params).id;

  const {
    status,
    error,
    data: event,
  } = useQuery({ queryKey: ["event"], queryFn: () => fetchEvent(eventId) });

  if (status == "pending") return <Loading></Loading>;
  if (status == "error") return <Error error={error} />;

  return (
    <div>
      <p>event page!</p>
      <p>{}</p>
    </div>
  );
}
