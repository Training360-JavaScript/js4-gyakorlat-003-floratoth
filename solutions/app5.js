const getProducts = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const sortedData = data.sort((a, b) => a.price - b.price);
    const filteredDataByPrice = sortedData.filter((obj) => obj.price >= 25);
    return filteredDataByPrice;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getProducts };
