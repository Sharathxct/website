export default function Home() {
  console.log("hello");
  return (
    <div className="flex flex-col items-center justify-center">
      <input type="name" autoComplete="email" autoFocus />
      <h1>Hello World</h1>
    </div>
  );
}
