import Link from "next/link";

export default function NotFound() {
  return <div className="container not-found"><div><h1>404</h1><h2>This troubleshooting path does not exist yet.</h2><p>Describe the visible symptom, use the exact error code, or search the current guide library.</p><div className="not-found-actions"><Link className="button button-primary" href="/diagnose">Start diagnosis</Link><Link className="button button-secondary" href="/search">Search Troublio</Link></div></div></div>;
}
