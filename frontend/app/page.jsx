import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link
        href="/register"
        className="border-2 border-gray-950 px-6 py-3 uppercase"
      >
        Register
      </Link>
    </>
  );
}
