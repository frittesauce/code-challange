interface ErrorProps {
  error: Error;
}

export function Error({ error }: ErrorProps) {
  return (
    <div className="w-screen h-screen flex align-middle justify-center">
      <div className="self-center w-max h-max">
        <div className="mb-8">
          <span className="text-9xl">:(</span>
        </div>
        <h1 className="text-3xl font-bold">
          An error occured trying to load this page!
        </h1>
        <p>{error.message}</p>
      </div>
    </div>
  );
}
