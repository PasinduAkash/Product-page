// amount addition and reduction//

let count = 0;
const add = () => {
  count++;
 return document.querySelector(".amount").innerHTML = count;
}

const subtract = () =>{
  count--;
  if(count >= 0) {
    return document.querySelector(".amount").innerHTML = count;
  } else {
    count = 0;
    return document.querySelector(".amount").innerHTML = count;
  }
 
}

// sidebar menu functionality//

const openSidebar = () => {
  document.querySelector(".sidebar-menu").style.visibility = "visible";
}

const closeSidebar = () => {
  document.querySelector(".sidebar-menu").style.visibility = "hidden";
}


// slideshow functionality//

let slideNum = 1;

const slideLeft = () => {
  if (slideNum === 1) {
    slideNum = 4;
  } else {
    slideNum--;
  }
  document.querySelector("img.thumbnail").src = "./images/image-product-" + slideNum + ".jpg";
}

const slideRight = () => {
  if (slideNum === 4) {
   slideNum = 1;
  } else {
    slideNum += 1;
  }
  document.querySelector("img.thumbnail").src = "./images/image-product-" + slideNum + ".jpg";
}


//add and remove from cart functionality//

const openCart = () => {
  document.querySelector("img.avatar").classList.toggle("avatar-click");
document.querySelector("div.cart-card").classList.toggle("card-visible");
}

// Add to cart functionality//


const addToCart = () => {

  if (count !== 0) {
  document.querySelector(".card-para").style.display = "none";
  document.querySelector(".item-added").style.visibility = "visible";
  document.querySelector(".checkout-button").style.display = "block";

  const totalPrice = 125 * count;
  document.querySelector(".total-price").innerHTML = "$" + totalPrice;  
  }
}

const onDelete = () => {
  document.querySelector(".item-added").style.visibility = "hidden";
  document.querySelector(".checkout-button").style.display = "none";
  document.querySelector(".card-para").style.display = "block";
}

// image box currently selected//

const prev = [0];

document.querySelector(".pic-1").style.border = "3px solid hsl(26, 100%, 55%)";
document.querySelector(".pic-1").style.opacity = "0.5";

for (let i=0; i<4; i++){
document.querySelectorAll(".small-pic")[i].addEventListener("click", (e) => {
 prev.push(i);
  let imageNo = i + 1;

  document.querySelectorAll(".small-pic")[prev[0]].style.border = "0";
  document.querySelectorAll(".small-pic")[prev[0]].style.opacity = "1";

  document.querySelector(".thumbnail").src = "./images/image-product-" + imageNo + ".jpg"; 
  e.path[0].style.border = "3px solid hsl(26, 100%, 55%)";
  e.path[0].style.opacity = "0.5";

  prev.shift();
})
}


