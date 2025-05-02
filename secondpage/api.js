let API="http://localhost:3000/data"
import get from "./dom.js";

async function getData() {

    try {
        let {data}=await axios.get(API)
        get(data)
        console.log(data);
    } catch (error) {
        console.log(error);       
    }
}

// search
async function searchUser(value) {
    try {
        let {data}=await axios.get(`${API}?name=${value}`)
        get(data)
    } catch (error) {
        console.log(error);
        
    }
}

export default getData
export {searchUser}