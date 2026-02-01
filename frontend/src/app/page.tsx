import { toast } from "react-toastify";


export default function Home() {
  return (
    <div >
      <p>hello!</p>
      <button onClick={() => {
        toast("this toast is so cool!")
      }}>show toast.</button>
    </div>
  );
}
