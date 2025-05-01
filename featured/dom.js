let box=document.querySelector(".box")
function get(data){
data.forEach(element => {
    let conteiner=document.createElement("div")
    conteiner.classList.add("conteiner")
    let avatar=document.createElement("img")
    avatar.src=element.avatar
let name=document.createElement("h1")
name.innerHTML=element.name
name.classList.add("name")
let price=document.createElement("p")
price.innerHTML=element.price
price.classList.add("price")
    conteiner.append(avatar,name,price)
    box.appendChild(conteiner)
});
}
export default get  