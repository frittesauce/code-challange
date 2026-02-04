"use client";

import { Error } from "@/components/ui/error";
import { Loading } from "@/components/ui/loading";
import { fetchEvent } from "@/queries";
import { EventPageProps } from "@/types/components/events";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
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
    <div className="flex gap-x-4">
      <div className="flex flex-col gap-y-2 p-4 rounded-md bg-ctp-mantle">
        {event.image ? (
          <img
            alt="event"
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${event.image.url}`}
            className=" max-h-[500px] w-auto max-w-[700px] mr-auto ml-auto rounded-md"
          />
        ) : (
          <></>
        )}
        <h1 className=" text-3xl font-semibold"> {event.title}</h1>
        <p className=" text-ctp-subtext0">
          {event.location} • {new Date(event.date).toDateString()}
        </p>
      </div>
      <div>
        <BlocksRenderer
          content={event.description}
          blocks={{
            // You can use the default components to set class names...
            paragraph: ({ children }) => (
              <p className="text-neutral900 max-w-prose">{children}</p>
            ),
            // ...or point to a design system
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return (
                    <h1 className=" font-semibold text-5xl">{children}</h1>
                  );
                case 2:
                  return (
                    <h2 className=" font-semibold text-4xl ">{children}</h2>
                  );
                case 3:
                  return (
                    <h3 className=" font-semibold text-3xl">{children}</h3>
                  );
                case 4:
                  return (
                    <h4 className=" font-semibold text text-2xl">{children}</h4>
                  );
                case 5:
                  return <h5 className=" font-semibold text-xl">{children}</h5>;
                case 6:
                  return <h6 className=" font-semibold text-lg">{children}</h6>;
                default:
                  <h1 className=" font-semibold text-5xl">{children}</h1>;
              }
            },
            link: ({ children, url }) => <Link href={url}>{children}</Link>,
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => (
              <span className="italic">{children}</span>
            ),
          }}
        ></BlocksRenderer>
      </div>
    </div>
  );
}
