"use client";

import { fetchEvent } from "@/queries";
import { EventPageProps } from "@/types/components/events";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

export default function EventPage({ params }: EventPageProps) {
  const eventId = use(params).id;

  const {
    status,
    error,
    data: events,
  } = useQuery({ queryKey: ["events"], queryFn: () => fetchEvent(eventId) });

  return (
    <div>
      <p>event page!</p>
    </div>
  );
}
