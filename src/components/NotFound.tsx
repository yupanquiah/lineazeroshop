export function NotFound() {
  return (
    <div className="grid min-h-dvh place-content-center">
      <main className="inline-flex">
        <h1 className="mr-5 inline-block border-r border-muted pr-6 align-top text-2xl leading-12 font-medium">
          404
        </h1>
        <div className="inline-block">
          <h2 className="m-0 text-sm leading-12 font-normal">
            This page could not be found.
          </h2>
        </div>
      </main>
    </div>
  );
}
