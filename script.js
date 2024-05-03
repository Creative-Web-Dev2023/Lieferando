let menus =[
    {
        name:"Pizza Margherita",
        description:"mit Mozarella,Tomatensoße und Basilikum",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:8.99,
        amount:1,
        dishesImage: './img/pizzamargherita.jpg'
    },
    {
        name:"Pizza Prosciutto",
        description:"mit Schinken,Mozarella und Pepperoni",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:9.99,
        amount:1,
        dishesImage:"./img/mozarella.jpg"
    },
    {
        name:"Pizza Salami",
        description:"mit Schinken,Mozarella und Pepperoni",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:11.99,
        amount:1,
        dishesImage:"./img/salami.jpg"
    },
    {
        name:"Pizza Spinaci",
        description:"mit Spinat und Käse",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:10.99,
        amount:1,
        dishesImage:"./img/spinaci.jpg"
    },
    {
        name:"Pizza Mexicana",
        description:"mit Mais,Paprika und Mozarella",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:11.99,
        amount:1,
        dishesImage:"./img/pizzamargherita.jpg"
    },
    {
        name:"Pizza Vegetaria",
        description:"mit allerlei Gemüse",
        plusImage:"./icon/plus.png",
        minusImage:"./icon/minus.png",
        price:12.99,
        amount:1,
        dishesImage:"./img/vegetaria.jpg"
    }
    ];
let shoppingBasket = []

function init(){
  render();
}

function render(){
    let content = document.getElementById('content');
    content.innerHTML=''; //Inhalt leeren

    for (let i = 0; i < menus.length; i++) { // durch Array iterieren
        const menu = menus[i];
        content.innerHTML = `
        <div class="dishes-div">
        <div class="dishes-name-div">
            <h4 class="menu-name">${menu.name}</h4>
            <img class="plusImg" src="/icon/plus.png" onclick="addFoodToBasket(${i})" alt="Plus">
        </div>
        <div class="dishes-description-img-div">
            <div>
                <p class="dishes-description">${menu.description}</p>
                <p class="dishes-price"><b>${menu.price.toFixed(2)} €</b></p>
            </div>
            <div>
                <img class="dishes-img" src="${menu.dishesImage}" alt="${menu.name}">
            </div>
        </div>
    </div>`;
}
}
function getMenuIndex(index) { 
    
    return shoppingBasket.indexOf(index); //Überprüft ob in Warenkorb schon was drin ist

function renderBasket() {
    let basketContent = document.getElementById('basket-content');
    basketContent.innerHTML = "";
    
    for (let i = 0; i < shoppingBasket.length; i++) {
        basketContent.innerHTML += `
            <div class="basket-item">
                <span>${shoppingBasket[i]}</span>
                <span>${amountBasket[i]}</span>
            </div>
        `;
    }
}
function addFoodToBasket(i){ // Food hinzufügen
    let menu =menus[i];
    let menuName = menu.name;
    let price = menu.price;
    let index = getMenuIndex(menuName);

    if (index === -1){ //wenn das Gericht  bereits im Warenkorb vorhanden ist (Index ist nicht -1),
        shoppingBasket.push(menuName);
        priceBasket.push(price);
        amountBasket.push(1);
    } else{
        amountBasket[index]++; // Menge des vorhandenen Gerichts im Warenkorb erhöhen
    }
    renderBasket();
}
}