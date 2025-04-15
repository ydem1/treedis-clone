import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link href={"/login"}>login</Link>
      <br />
      <Link href={"/register"}>register</Link>
    </div>
  );
}
