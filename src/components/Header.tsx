import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/decoder">Decoder</Link>
          <Link href="/reset">Reset</Link>
          <Link href="/error-codes">Error codes</Link>
          <Link href="/devices">Devices</Link>
          <Link href="/issues">Issues</Link>
          <Link href="/guides">All guides</Link>
        </nav>
        <div className="header-tools">
          <Link className="header-tool header-diagnose" href="/diagnose" aria-label="Guided diagnosis">
            <span aria-hidden="true">⌁</span><em>Diagnose</em>
          </Link>
          <Link className="header-tool" href="/saved" aria-label="Saved guides">
            <span aria-hidden="true">☆</span><em>Saved</em>
          </Link>
          <Link className="header-search" href="/search" aria-label="Search Troublio">
            <span aria-hidden="true">⌕</span><em>Search</em>
          </Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation"><span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile navigation">
              <Link href="/decoder">Error code decoder</Link>
              <Link href="/reset">Reset assistant</Link>
              <Link href="/model-number">Find a model number</Link>
              <Link href="/devices">Devices</Link>
              <Link href="/issues">Issue hubs</Link>
              <Link href="/error-codes">Error codes</Link>
              <Link href="/guides">All guides A–Z</Link>
              <Link href="/recent">Recently reviewed</Link>
              <Link href="/categories">Categories</Link>
              <Link href="/brands">Brands</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
