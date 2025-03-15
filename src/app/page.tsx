import Link from "next/link";

export default function Home() {
  return (
    <div>
      Next.js Home
      <div className="flex gap-2">
        <Link href={"/blog"} className="border rounded-b-sm">
          Blog
        </Link>
        <Link href={"/product"} className="border rounded-b-sm">
          Product
        </Link>
      </div>
    </div>
  );
}
