let secondAside=document.querySelector(".secondAside")
import { searchUser } from "./api.js";
function get(data) {
    secondAside.innerHTML=""
    data.forEach(element => {
   let conteiner=document.createElement("div")
   conteiner.classList.add("conteiner")
let avatar=document.createElement("img")
avatar.src=element.avatar
avatar.onclick=()=>{

    localStorage.setItem("product",element.id)
    window.location.href="../infoPage/infoPage.html"
}
avatar.classList.add("avatar")
let divForNameAndModel=document.createElement("div")
divForNameAndModel.classList.add("divForNameAndModel")
let name=document.createElement("h1")
name.innerHTML=element.name
let model=document.createElement("p")
model.innerHTML=element.title
model.classList.add("model")
let divForPriceAndShop=document.createElement("div")
divForPriceAndShop.classList.add("divForPriceAndShop")
let price=document.createElement("p")
price.innerHTML=element.price
price.classList.add("price")
let shopIcon=document.createElement("i")
divForNameAndModel.append(name,model)
divForPriceAndShop.append(price,shopIcon)
shopIcon.classList.add("fa-solid","fa-cart-shopping","shopIcon")
conteiner.append(avatar,divForNameAndModel,divForPriceAndShop)
   secondAside.appendChild(conteiner)

    });   

}




// search
let Search=document.querySelector(".Search")
Search.oninput=()=>{
    searchUser(Search.value.trim())
}

export default get
