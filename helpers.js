import { API_URL } from "./Config";

export async function fetchPublishableKey() {
  try {
    const response = await fetch(`${API_URL}/config`);
    const { publishableKey } = await response.json();
    return publishableKey;
  } catch (e) {
    console.log(e);
    console.log("error at apu url");
  }
}
