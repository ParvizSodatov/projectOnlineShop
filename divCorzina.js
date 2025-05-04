let korzina = document.querySelector(".korzina");
let shop = document.querySelector(".shop");
let cancel = document.querySelector(".cancel");


let cart = JSON.parse(localStorage.getItem("cart")) || [];


let element = {
    id: '1',
    avatar: '../divanWhite.png',
    name: 'High-Back Bench',
    price: '9.99',
    title: 'Sofa'
};


function addToCart(element) {
    cart.push(element);
    localStorage.setItem("cart", JSON.stringify(cart)); // Сохраняем обновленный массив в localStorage
}


shop.onclick = () => {
    addToCart(element); 
    korzina.style.display = "block";
    get(cart); 
};

cancel.onclick = () => {
    korzina.style.display = "none";
};

function get(cart) {
    // korzina.innerHTML = ''; 
    cart.forEach((elem) => {
       
     
    });
}
