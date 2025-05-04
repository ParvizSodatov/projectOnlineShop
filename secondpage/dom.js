let secondAside=document.querySelector(".secondAside")
let INrange=document.querySelector(".INrange")
let spanValue=document.querySelector(".spanValue")
import { searchUser,selectProduct,showALLProduct,rangrPrice } from "./api.js";
let korzina=document.querySelector(".korzina")
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
price.innerHTML=element.price+"$"
price.classList.add("price")
let shopIcon=document.createElement("i")
shopIcon.onclick=()=>{
    korzina.style.display="block"
    localStorage.setItem("element",JSON.stringify(element))
}
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
// select

let selectModel=document.querySelector(".selectModel")
selectModel.onclick=()=>{
    if(selectModel.value=="All"){
        showALLProduct(selectModel.value)
    }
    else{
        selectProduct(selectModel.value)
    }

}
INrange.onchange=()=>{
    spanValue.innerHTML=`${INrange.value}$`
    rangrPrice(+INrange.value)
}



export default get
