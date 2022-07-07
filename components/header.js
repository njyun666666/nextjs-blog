import Link from "next/link";

export default function Header() {
  return (
    <div>
      header
      <input type="text" />
      <br />
      <Link href="/posts/ssg-ssr">
        <a>ssg-ssr</a>
      </Link>
      <br />
      <Link href="/posts/pre-rendering">
        <a>pre-rendering</a>
      </Link>
    </div>
  );
}
