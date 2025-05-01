let API="http://localhost:3000/featured"
import get from "./dom.js";
async function getData() {
   try {
      let {data}=await axios.get(API)
      // console.log(data);
      let featured=data
      get(featured)
      // console.log(featured);  
   } catch (error) {
      console.log(error);
   }
}
export default getData;