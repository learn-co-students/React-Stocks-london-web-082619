const STOCKS_URL = 'http://localhost:3000/stocks'

class API {
    static get = () => fetch(STOCKS_URL).then(resp=>resp.json())
}

export default API;
