"use client";

import { useViewportMetrics } from '@/lib/useViewportMetrics';
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Header() {
  useViewportMetrics();
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) menuRef.current.open = false;
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="main-nav" aria-label="Primary navigation">
          <Link href="/tools">Tools</Link>
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
          <details ref={menuRef} className="mobile-menu">
            <summary aria-label="Open navigation"><span aria-hidden="true">☰</span></summary>
            <nav aria-label="Mobile navigation" onClick={(event) => { if ((event.target as HTMLElement).closest("a") && menuRef.current) menuRef.current.open = false; }}>
              <Link href="/tools">Tools and cost comparison</Link>
              <Link href="/experience">Real-world experience</Link>
              <Link href="/models">Community model pages</Link>
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
