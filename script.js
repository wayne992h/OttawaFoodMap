let products = {
  data: [
    {
      productName: "Ng's Cuisine",
      category: "Chinese",
      price: "30",
      image: "./images/Chinese/ngs cuisine.jpg",
    },
    {
      productName: "La Noodle",
      category: "Chinese",
      price: "49",
      image: "./images/Chinese/la noodle.jpg",
    },
    {
      productName: "Happy Lamb",
      category: "Chinese",
      price: "99",
      image: "./images/Chinese/happy lamb.jpg",
    },
    {
      productName: "Umbrella Burger",
      category: "Fast",
      price: "29",
      image: "./images/Fast",
    },
    {
      productName: "50 TWO Sandwiches",
      category: "Fast",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    {
      productName: "Nando's",
      category: "Fast",
      price: "89",
      image: "pink-trousers.jpg",
    },
    {
      productName: "Heartbreakers Pizza",
      category: "Fast",
      price: "189",
      image: "brown-jacket.jpg",
    },
    {
      productName: "Turkish Kebab House",
      category: "Dinner",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
    {
      productName: "The Keg Steakhouse",
      category: "Dinner",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
    {
      productName: "Montana’s BBQ",
      category: "Dinner",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
    {
      productName: "Heart & Crown",
      category: "Bar",
      price: "49",
      image: "./images/Bar/heart crown.jpg",
    },
    {
      productName: "Moxies Hunt Club",
      category: "Bar",
      price: "49",
      image: "./images/Bar/moxie.jpg",
    },
    {
      productName: "Tailgators",
      category: "Bar",
      price: "49",
      image: "./images/Bar/tailgator.jpg",
    },
    {
      productName: "Korean House Restaurant",
      category: "Asian",
      price: "49",
      image: "./images/Asian/Korean house.jpg",
    },
    {
      productName: "Gyubee Japanese Grill",
      category: "Asian",
      price: "49",
      image: "./images/Asian/Gyubee.jpg",
    },
    {
      productName: "Dao Café",
      category: "Desert",
      price: "49",
      image: "./images/Desert/dao cafe.jpg",
    },
    {
      productName: "Chatime",
      category: "Desert",
      price: "49",
      image: "./images/Desert/chatime.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "Per Person$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
