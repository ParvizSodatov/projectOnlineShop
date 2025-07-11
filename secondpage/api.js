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


// selectProduct
async function selectProduct(value) {
    try {
        let {data}=await axios.get(`${API}?title=${value}`)
        get(data)
    } catch (error) {
        console.log(error);
        
    }
}

// showAllProduct
async function showALLProduct() {
    try {
        let {data}=await axios.get(API)
        get(data)
    } catch (error) {
        console.log(error);
        
    }
}
async function rangrPrice(value) {
    try {
        let response=await axios.get(API)
        if(value==0){
            get(response.data)
        }
        else{
            let filter=response.data.filter(({price})=>price<=value)
            get(filter)
        }
    } catch (error) {
        console.log(error);
        
    }
}


export default getData
export {searchUser,selectProduct,showALLProduct,rangrPrice}