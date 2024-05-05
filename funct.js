function init(){
    loadArray();
    renderMenu();
    renderBasket();
}

  function renderTemplateHtml(menu, i) {
    return  /*html*/`
              <div class="menus">
              <div class="menus-plus" id="menu-plus${i}" alt="plus" onclick="addFoodToBasket(${i})">+</div>
              <h2>${menu.name}</h2>
              <p>${menu.description}</p>
              <span class="dishes-price" id="dishes-price"><b>${
                menu.price.toFixed(2) + " €"
              }</b></span>
              </div>
          `;
  }
 function getMenuIndex(index) { //Überprüft ob in Warenkorb schon was drin ist
    return shoppingBasket.indexOf(index);
  }
function addFoodToBasket(i){
    let menu =menus[i];
    let menuName = menu.name;
    let price = menu.price;
    let index = getMenuIndex(menuName);

    if (index === -1){ //wenn das Gericht jedoch bereits im Warenkorb vorhanden ist (Index ist nicht -1),
        shoppingBasket.push(menuName);
        priceBasket.push(price);
        amountBasket.push(1);
    } else{
        amountBasket[index]++; // Menge des vorhandenen Gerichts im Warenkorb erhöhen
    }
    
 
function removeBasketAfterOrder() {
  for (let i = 0; i < shoppingBasket.length; i++) {
    shoppingBasket.splice(i, 6);
    amountBasket.splice(i, 6);
    priceBasket.splice(i, 6);
    renderBasket();
   
  }
}

function saveArray(){
    let menusAsText =JSON.stringify(menus);
    localStorage.setItem('menus', menusAsText);
}
function loadArray() {
    let menusAsText = localStorage.getItem('menus');
    if (menusAsText) {
        menus = JSON.parse(menusAsText);
    }
  }
}
