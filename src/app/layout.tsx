import type { Metadata } from "next";
import "./globals.css";
import AdBanner from "@/components/AdBanner";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Ecotron | Future of AI Monetization",
  description: "Secure AI infrastructure with integrated ad inventory and media storage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>
          <div className="layout">
          <header className="header">
            <div className="logo">ECOTRON</div>
            <nav className="nav-links">
              <a href="#" className="nav-link">Dashboard</a>
              <a href="#" className="nav-link">AI Studio</a>
              <a href="#" className="nav-link">Inventory</a>
              <a href="#" className="nav-link">Analytics</a>
            </nav>
            <div className="auth-button">
              <button style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>Connect</button>
            </div>
          </header>

          <div className="main-container">
            <aside className="sidebar">
              <h3>Inventory</h3>
              <p style={{ fontSize: '0.8rem' }}>Sponsored Content</p>
              <AdBanner 
                id="419b347d315cd1215c1db06b7db000a5" 
                width="160" 
                height="600" 
                format="iframe"
              />
              <AdBanner 
                id="7f1e1c3d11870c7899ccce329cdd56e9" 
                width="160" 
                height="300" 
                format="iframe"
              />
            </aside>

            <main className="content">
              {children}
            </main>

            <aside className="sidebar right">
              <h3>Recommended</h3>
              <AdBanner 
                id="eca2cd8a7fd561c8d9ddc9b4e1302ac9" 
                width="300" 
                height="250" 
                format="iframe"
              />
              <AdBanner 
                id="f60abc3ad258484f0670ebbbace5b661" 
                width="320" 
                height="50" 
                format="iframe"
              />
              <div className="card" style={{ marginTop: '2rem' }}>
                <h4>Network Status</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></div>
                  <span style={{ fontSize: '0.9rem' }}>Ollama Online</span>
                </div>
              </div>
            </aside>
          </div>

          <footer className="footer">
            <AdBanner 
              id="c25ecd0c0fe9d93f6cf66f0016cbd198" 
              width="728" 
              height="90" 
              format="iframe"
            />
            <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
              &copy; 2026 Ecotron Advanced AI Systems. All rights reserved.
            </div>
          </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
