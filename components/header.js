import Link from "next/link";

export default function Header() {
  return (
    <div>
      header
      <input type="text" />
      <br />
      <Link href="/">
        <a>home</a>
      </Link>
      <br />
      <Link href="/aaa">
        <a>aaa</a>
      </Link>
      <br />
      <Link href="/bbb">
        <a>bbb</a>
      </Link>
    </div>
  );
}
