import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Troublio home">
      <span>Troubli</span>
      <span className="logo-mark" aria-hidden="true">o</span>
    </Link>
  );
}
