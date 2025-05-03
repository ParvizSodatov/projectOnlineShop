

let API="http://localhost:3000/data"
let ID=localStorage.getItem("product")
let img=document.querySelector(".avatar")
let aside_right=document.querySelector(".aside_right")
async function getData() {
    try {
        let {data}=await axios.get(`${API}?id=${ID}`)
        get(data)
    } catch (error) {
        console.log(error);    
    }
}
getData()
function get(data){
  data.forEach(element => {
    img.src=element.avatar
let name=document.createElement("h1")
name.innerHTML=element.name
name.classList.add("name")
let model=document.createElement("p")
model.innerHTML=element.title
model.classList.add("model")
let price=document.createElement("p")
price.innerHTML=element.price
price.classList.add("price")
let desk=document.createElement("p")
desk.innerHTML=element.desk
desk.classList.add("desk")
let AddToCardBtn=document.createElement("button")
AddToCardBtn.innerHTML="Add T Cart"
AddToCardBtn.classList.add("AddToCardBtn")
aside_right.append(name,model,price,desk,AddToCardBtn)

  });
}