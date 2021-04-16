import fetch from "node-fetch";

export const api = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    console.log(response);
    throw new Error(response.statusText);
  }

  return await response.json();
};
