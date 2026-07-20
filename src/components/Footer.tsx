import Link from "next/link";
import { Logo } from "@/components/Logo";
import { ConsentSettingsButton } from "@/components/ConsentManager";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-summary">
            Clear troubleshooting paths for devices, apps, vehicles, appliances, and everyday problems.
          </p>
        </div>
        <div>
          <h2>Tools</h2>
          <Link href="/decoder">Error code decoder</Link>
          <Link href="/reset">Reset assistant</Link>
          <Link href="/model-number">Model number finder</Link>
          <Link href="/diagnose">Guided diagnosis</Link>
          <Link href="/search">Search</Link>
          <Link href="/saved">Saved guides</Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/devices">Devices</Link>
          <Link href="/issues">Issue hubs</Link>
          <Link href="/guides">All guides A–Z</Link>
          <Link href="/recent">Recently reviewed</Link>
          <Link href="/error-codes">Error codes</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/brands">Brands</Link>
          <a href="/feed.xml">RSS updates</a>
        </div>
        <div>
          <h2>Trust and legal</h2>
          <Link href="/editorial-policy">Editorial policy</Link>
          <Link href="/disclaimer">Safety disclaimer</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <ConsentSettingsButton />
          <Link href="/terms">Terms</Link>
          <Link href="/submit-problem">Submit a problem</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Troublio</span>
        <span>Find what&apos;s wrong. Know what to do.</span>
      </div>
    </footer>
  );
}
