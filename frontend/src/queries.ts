import axios from "axios";

export async function fetchEvents() {
  const token = localStorage.getItem("DO_NOT_SHARE_TOKEN");

  if (!token) {
    return new Error("missing token!");
  }

  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);
}
