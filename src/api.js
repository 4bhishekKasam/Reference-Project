export async function apiFunc() {
  const data = await fetch("https://tv-v2.api-fetch.website/movies/1");
  const json = await data.json();

  return json;
}
