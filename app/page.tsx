import { headers } from "next/headers";

export default function Home() {
  const ipAddress = headers().then((headers) => headers.get("x-forwarded-for"));

  return (
    <div className="flex flex-col items-center justify-center">
      <input type="name" autoComplete="email" autoFocus />
      <h1>hi {ipAddress || 'unknown'}</h1>
    </div>
  );
}

