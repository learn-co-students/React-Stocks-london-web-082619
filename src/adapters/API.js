const getStocks = () => {
  return fetch("http://localhost:3000/stocks")
    .then(res => res.json())
}

const API = { getStocks }

export default API;