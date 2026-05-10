# Ecotron Platform - ad landing v1

Modern Next.js landing page with integrated ad inventory, secure AI infrastructure (Ollama), MongoDB, and MinIO storage.

## Tech Stack
- **Frontend**: Next.js 14, Vanilla CSS (Premium Glassmorphism)
- **Database**: MongoDB
- **Storage**: MinIO (S3 Compatible)
- **AI**: Ollama (Running local Phi3)
- **Infrastructure**: Docker Compose
- **Auth**: NextAuth.js

## Getting Started

### 1. Start Infrastructure
```bash
docker-compose up -d
```

### 2. Pull AI Model
```bash
docker exec -it ecotron-ollama ollama pull phi3
```

### 3. Run Development Server
```bash
npm run dev
```

## Ad Inventory Integration
The following placements are active:
- **Left Sidebar**: Banner 160x600 (`419b347d315cd1215c1db06b7db000a5`)
- **Right Sidebar**: Banner 300x250 (`eca2cd8a7fd561c8d9ddc9b4e1302ac9`)
- **Center Content**: Native Banner 4:1 (`bc5972dfd55ab0a5e10b6ee43572241a`)
- **Footer**: Banner 728x90 (`c25ecd0c0fe9d93f6cf66f0016cbd198`)

## Secure Access
Default credentials:
- **Username**: `admin`
- **Password**: `password`
