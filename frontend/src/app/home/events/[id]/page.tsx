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
    <div className="flex">
      <div className="flex flex-col gap-y-2 p-4 rounded-md bg-ctp-mantle">
        <img
          alt="event"
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${event.image.url}`}
          className=" max-h-[500px] w-auto max-w-[700px] mr-auto ml-auto rounded-md"
        />
        <h1 className=" text-3xl font-semibold"> {event.title}</h1>
        <p className=" text-ctp-subtext0">
          {event.location} • {new Date(event.date).toDateString()}
        </p>
      </div>
      <div></div>
    </div>
  );
}
