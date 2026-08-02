/**
 * Loads every PNG listed in /public/flowers/manifest.json.
 * Add a drawing: drop the file in /public/flowers and add its name to the manifest.
 */
export async function loadFlowers(): Promise<HTMLImageElement[]> {
  const res = await fetch("/flowers/manifest.json");
  if (!res.ok) throw new Error("Could not read /flowers/manifest.json");

  const files: string[] = await res.json();

  const images = await Promise.all(
    files.map(
      (name) =>
        new Promise<HTMLImageElement | null>((resolve) => {
          const img = new Image();
          img.onload = () => resolve(img);
          img.onerror = () => {
            console.warn(`Skipping missing flower: ${name}`);
            resolve(null);
          };
          img.src = `/flowers/${name}`;
        })
    )
  );

  return images.filter((i): i is HTMLImageElement => i !== null);
}
