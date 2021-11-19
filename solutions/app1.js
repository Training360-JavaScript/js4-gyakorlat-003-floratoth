const startFetch = async (url = "") => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { startFetch };
