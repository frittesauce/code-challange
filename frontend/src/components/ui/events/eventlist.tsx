import { EventListProps } from "@/types/components/events";
import { EventCard } from "./eventCard";

export function EventList({ eventlist }: EventListProps) {
  return (
    <div className="flex">
      {eventlist.map((e) => (
        <EventCard eventInfo={e} key={e.id} />
      ))}
    </div>
  );
}
