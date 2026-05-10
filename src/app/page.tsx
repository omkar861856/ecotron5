import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <div className="home-content">
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <AdBanner 
          id="d9b9196cf2814e58242076df2f21e5dc" 
          width="468" 
          height="60" 
          format="iframe"
        />
      </div>
      <div className="hero">
        <h1>Intelligent <span style={{ color: 'var(--primary)' }}>Infrastructure</span> for the AI Age</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
          Ecotron provides a unified stack for decentralized AI, secure media storage, and automated monetization. 
          Powered by Ollama and MinIO.
        </p>
      </div>

      <div style={{ margin: '3rem 0' }}>
        <AdBanner 
          id="bc5972dfd55ab0a5e10b6ee43572241a" 
          format="native" 
        />
      </div>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="card">
          <h3>Ollama Intelligence</h3>
          <p>Running local inference with high-performance models. Secure, private, and fast.</p>
          <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.9rem' }}>
            $ ollama run llama3
          </div>
        </div>
        
        <div className="card">
          <h3>MinIO Storage</h3>
          <p>S3-compatible object storage for all your AI-generated media and datasets.</p>
          <button style={{ 
            marginTop: '1rem', 
            background: 'transparent', 
            border: '1px solid var(--primary)', 
            color: 'var(--primary)',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>Manage Buckets</button>
        </div>

        <div className="card">
          <h3>MongoDB Core</h3>
          <p>High-availability data persistence for user personas, prompts, and analytics.</p>
        </div>
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h2>System Health</h2>
        <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>99.9%</div>
            <div style={{ color: '#64748b' }}>Uptime</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12ms</div>
            <div style={{ color: '#64748b' }}>Latency</div>
          </div>
          <div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>4.2TB</div>
            <div style={{ color: '#64748b' }}>Storage</div>
          </div>
        </div>
      </div>
    </div>
  );
}
