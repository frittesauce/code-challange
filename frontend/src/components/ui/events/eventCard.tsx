import { EventCardProps } from "@/types/components/events";
import { redirect } from "next/navigation";

export function EventCard({ eventInfo }: EventCardProps) {
  const date = new Date(eventInfo.date);

  return (
    <div
      className=" flex flex-col m-4 p-4 bg-ctp-mantle rounded-md gap-y-2 align-middle w-[400px] cursor-pointer"
      onClick={() => redirect(`/home/events/${eventInfo.documentId}`)}
    >
      <div className="flex w-[350px] h-[256px] self-center align-middle">
        <img
          alt="event"
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${eventInfo.image.url}`}
          className=" max-h-[256px] w-auto max-w-[350px] mr-auto ml-auto rounded-md"
        />
      </div>
      <div className="rounded-md bg-ctp-crust p-2">
        <h1 className=" font-semibold text-lg">{eventInfo.title}</h1>
        <p className=" text-ctp-subtext0">
          {eventInfo.location} • {date.toDateString()}
        </p>
      </div>
    </div>
  );
}
