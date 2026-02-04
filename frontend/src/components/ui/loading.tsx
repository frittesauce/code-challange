export function Loading() {
  return (
    <div className="w-screen h-screen flex align-middle justify-center">
      <div className="self-center w-max h-max">
        <img src="/throbber.gif" alt="throbber" className="w-32 h-32" />
        {/* <h1 className="text-3xl font-bold">loading.....</h1> */}
      </div>
    </div>
  );
}
