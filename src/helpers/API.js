
class API {
    static get = () => fetch('http://localhost:3000/stocks').then(resp => resp.json())
}
export default API