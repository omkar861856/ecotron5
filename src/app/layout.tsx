import type { Metadata } from "next";
import "./globals.css";
import AdBanner from "@/components/AdBanner";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Ecotron AI | Premium Intelligence Platform",
  description: "Advanced AI deployment and monetization infrastructure for ecotron.co.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="43B9C8A4813F84E9436ABBB107B91A1F" />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          <div className="layout">
            <header className="header">
              <div className="logo">ECOTRON</div>
              <nav className="nav-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/dashboard" className="nav-link">Dashboard</a>
                <a href="/studio" className="nav-link">AI Studio</a>
                <a href="/nodes" className="nav-link">Nodes</a>
              </nav>
              <div className="auth-button">
                <button className="connect-btn">Connect Wallet</button>
              </div>
            </header>

            <div className="main-container">
              {/* Left Ad Sidebar */}
              <aside className="sidebar left-ads">
                <div className="ad-label-sidebar">SPONSORED</div>
                <AdBanner 
                  id="419b347d315cd1215c1db06b7db000a5" 
                  width="160" 
                  height="600" 
                />
                <AdBanner 
                  id="7f1e1c3d11870c7899ccce329cdd56e9" 
                  width="160" 
                  height="300" 
                />
              </aside>

              {/* Main App Section */}
              <main className="content">
                <div className="native-ad-wrapper">
                  <AdBanner 
                    id="bc5972dfd55ab0a5e10b6ee43572241a" 
                    format="native"
                    height="120"
                  />
                </div>
                {children}
              </main>

              {/* Right Ad Sidebar */}
              <aside className="sidebar right-ads">
                <div className="ad-label-sidebar">FEATURED</div>
                <AdBanner 
                  id="eca2cd8a7fd561c8d9ddc9b4e1302ac9" 
                  width="300" 
                  height="250" 
                />
                <AdBanner 
                  id="f60abc3ad258484f0670ebbbace5b661" 
                  width="320" 
                  height="50" 
                />
                
                <div className="card status-card">
                  <h4>System Health</h4>
                  <div className="status-item">
                    <span className="dot online"></span>
                    <span>Llama 3 8B (v0.1)</span>
                  </div>
                  <div className="status-item">
                    <span className="dot online"></span>
                    <span>Ubuntu Nodes: 4 vCPU / 16GB</span>
                  </div>
                </div>
              </aside>
            </div>

            <footer className="footer">
              <div className="footer-ads">
                <AdBanner 
                  id="c25ecd0c0fe9d93f6cf66f0016cbd198" 
                  width="728" 
                  height="90" 
                />
                <AdBanner 
                  id="d9b9196cf2814e58242076df2f21e5dc" 
                  width="468" 
                  height="60" 
                />
              </div>
              <div className="footer-info">
                <p>&copy; 2026 Ecotron Advanced Systems. Hosted on ecotron.co.in</p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
