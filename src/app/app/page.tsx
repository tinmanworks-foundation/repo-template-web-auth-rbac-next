import { getHealth } from '@/lib/api-client';

export default async function AppPage() {
  const health = await getHealth();
  return (
    <main>
      <h1>Protected Area Placeholder</h1>
      <p>External API health: {health.status}</p>
    </main>
  );
}
