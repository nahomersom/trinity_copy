export async function fetcher(url: string, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json();

  if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return data;
}
