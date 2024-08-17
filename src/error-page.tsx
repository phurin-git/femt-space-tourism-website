import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: unknown | null = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-black">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as { statusText?: string, message?: string })?.statusText || (error as { message?: string })?.message}</i>
      </p>
    </div>
  );
}