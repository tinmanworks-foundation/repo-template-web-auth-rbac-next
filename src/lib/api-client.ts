const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:4000';

export async function getHealth(): Promise<{ status: string }> {
  const response = await fetch(`${baseUrl}/health`, { cache: 'no-store' });
  if (!response.ok) {
    return { status: 'unavailable' };
  }
  return response.json();
}
