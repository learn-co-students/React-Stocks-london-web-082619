const BASE_URL = "http://localhost:3000"
const STOCKS_URL = `${BASE_URL}/stocks`

const getStocks = () => fetch(STOCKS_URL).then(resp => resp.json())

export default {
    getStocks
}

