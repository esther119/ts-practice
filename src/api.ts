const openai_api = "";
export default async function fetchAPI() {
  console.log("fetch api");
  try {
    const response = await fetch(openai_api);
    if (!response.ok) {
      throw new Error("failed to fetch");
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.log("error fetching data");
    return null;
  }
}

fetchAPI();
