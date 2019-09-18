const inventorySchema = [{
    organic: Boolean,
    img: String,
    produce: String,
    price: Number,
    sale: [Boolean, {
        discountPercent: Number,
        salePrice: Number,
        savings: Number
    }],
    quantity: Number
}];

//This function provides the discount amount based off price and percent
const discount = function (price, percent) {
    return ((percent / 100) * price).toFixed(2);
}
//This functiont takes the discount amount and takes away from price to give you the discount price
const discountPrice = function (price, discountAmt) {
    const discountAmount = discount(price, discountAmt)
    return (price - discountAmount).toFixed(2);
}

function addProduce(organic, image, produce, price, percent, quantity) {
    const newProduce = Object.create(inventorySchema);
    newProduce.organic = organic;
    newProduce.image = image;
    newProduce.produce = produce;
    newProduce.price = price.toFixed(2);
    newProduce.quantity = quantity;
    if (percent !== '') {
        newProduce.sale = true;
        newProduce.discountPercent = percent;
        newProduce.salePrice = discountPrice(price, percent);
        newProduce.savings = discount(price, percent);
    }
    return newProduce;
}

function makeElement(element, elementId, elementClass, text) {
    const newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.className = elementClass;
    newElement.innerText = text;
    return newElement;
}

const makeAttributes = function (element, ...attributes) {
    attributes.forEach(key => {
        element.setAttribute(key[0], key[1]);
    })
    return element;
}

function makeProduceCard(produce) {
    let discountPrice;
    let savings;

    const box = makeElement('div', '', 'col-md-8 col-md-offset-2 text-center box', '');
    const wrapper = makeElement('div', '', 'row', '');
    const li = makeElement('li', `produceItem${produce.produce}`, '', '');
    const image = makeElement('img', `${produce.produce.toLowerCase()}`, 'img-responsive col-md-5', '');
    makeAttributes(image, ['src', `${produce.image}`], ['alt', `An image of a ${produce.produce}`]);
    const produceName = makeElement('span', '', 'lead', produce.produce);
    const price = makeElement('h5', '', '', `Price: $${produce.price}`);
    if(produce.sale) {
        discountPrice = makeElement('h5', '', '', `Sale Price: $ ${produce.salePrice}`);
        savings = makeElement('h5', '', '', `Savings: $ ${produce.savings}`);
    } else {
        discountPrice = '';
        savings = '';
    }

    const checkbox = makeElement("input", "selectbox", "form-control", '');
    makeAttributes(checkbox, ["type", "checkbox"], ["name", `${produce.produce.toLowerCase()}`]);
    
    wrapper.append(image, produceName, price, discountPrice, savings, checkbox);
    li.append(wrapper);
    box.appendChild(li);
    return box;
}

const addShoppingCartToDOM = function () {
    const shoppingCartDiv = document.getElementById("shoppingCart");
    let cartSelections = JSON.parse(localStorage.getItem("cart"));

    console.log(cartSelections);

    for (i = 0; i < cartSelections.length; i++) {
        shoppingCartDiv.appendChild(makeProduceCard(cartSelections[i]));
    }
}

addShoppingCartToDOM();

updateCartBtn.addEventListener("click", () =>
{   
    document.location.reload();
});

// We need a container that will hold ALL products to display
// We need a container that will display our shopping cart
//A way to calculate each item that is in our shopping cart
//A way to provide a receipt section for localStorage&sessionStorage 
//BONUS: Add a timer function that will have a 'Success' message for purchase or a 'Please wait..' message for submission