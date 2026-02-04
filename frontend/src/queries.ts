import axios from "axios";
import { EventItem } from "./types/components/events";

export async function fetchEvents(): Promise<EventItem[]> {
  const token = localStorage.getItem("DO_NOT_SHARE_TOKEN");

  if (!token) {
    throw new Error("missing token!");
  }

  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/events?populate=*`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data.data);
}

export async function fetchEvent(id: number): Promise<EventItem> {
  const token = localStorage.getItem("DO_NOT_SHARE_TOKEN");

  if (!token) {
    throw new Error("missing token!");
  }

  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}?populate=*`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data.data);
}
