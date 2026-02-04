import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface EventItem {
  id: number;
  documentId: string;
  title: string;
  date: string;
  location: string;
  description: BlocksContent;
  image: {
    url: string;
  };
}

export interface EventListProps {
  eventlist: EventItem[];
}

export interface EventCardProps {
  eventInfo: EventItem;
}

export interface EventPageProps {
  params: Promise<{
    id: number;
  }>;
}
