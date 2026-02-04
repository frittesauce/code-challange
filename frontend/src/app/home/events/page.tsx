"use client";

import { Error } from "@/components/ui/error";
import { EventList } from "@/components/ui/events/eventlist";
import { Loading } from "@/components/ui/loading";
import { fetchEvents } from "@/queries";
import { EventItem } from "@/types/components/events";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const {
    status,
    error,
    data: events,
  } = useQuery<EventItem[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });
  if (status == "pending") return <Loading />;
  if (status == "error") return <Error error={error} />;

  console.log(events);
  return (
    <div>
      <p>event page!</p>
      <EventList eventlist={events}></EventList>
    </div>
  );
}
