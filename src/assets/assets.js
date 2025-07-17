import logo from './logo.png';
import search from './search.svg';
import cart from './cart.png';
import pizza from './pizza.jpg';
import burger from './burger.jpg';
import sandwich from './sandwich.jpg';
import fries from './fries.jpg';
import momos from './momos.jpg';
import pasta from './pasta.jpg';
import wraps from './wraps.jpeg';
import breads from './bread.jpg';
import shakes from './shakes.jpg';
import dessert from './brownie.jpg';
import margheritaPizza from './margheritaPizza.jpg';
import goldenCornPizza from './goldenCornPizza.jpg';
import creespyPaneerBurger from './creespyPaneerBurger.jpg'
import cheeseBombBurger from './cheeseBombBurger.jpg'
import classicVegSandwich from './classicVegSandwich.jpg'
import paneerSandwich from './paneerSandwich.jpg'
import crinkleFries from './crinkleFries.jpg'
import cheesyCrinkleFries from './cheesyCrinkleFries.jpg'
import vegMomos from './vegMomos.jpg'
import redSaucePasta from './redSaucePasta.png'
import whiteSaucePasta from './whiteSaucePasta.webp'
import alooVeggieWrap from './alooVeggieWrap.jpg'
import crunchyPaneerWrap from './crunchyPaneerWrap.jpg'
import classicGarlicBread from './classicGarlicBread.jpg'
import oreoShake from './oreoShake.jpg'
import bananaShake from './bananaShake.jpg'
import icecreamSundae from './icecreamSundae.jpg'
import brownie from './brownieee.jpg'





export const assets = {
  logo: logo,
    search: search,
    cart: cart,
    

  // Add more assets as needed
};

export const menuList = [
  {
    name: 'Pizza',
    image: pizza,
    price: 12.99,
  },
  {
    name: 'Burger',
    image: burger,
    price: 8.99},
  {
    name : 'Sandwich',
    image:sandwich,
    price:5},
  {
    name : 'Fries',
    image:fries,
    price:5},
  {
    name : 'Momos',
    image:momos,
    price:5},
  {
    name : 'Pasta',
    image:pasta,
    price:5},
  {
    name : 'Wraps',
    image:wraps,
    price:5},
  {
    name : 'Breads',
    image:breads,
    price:5},
  {
    name : 'Shakes',
    image:shakes,
    price:5},
  {
    name : 'Dessert',
    image:dessert,
    price:6},
  ]


  export const food_list = [
    {
      id: 1,
      name: "Cheesy Margherita Pizza",
      image: margheritaPizza,
      price: 89,
      description: "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
      category: "Pizza",
      rating: 4.7
    },
    {
      id: 2,
      name: "Golden Corn Pizza",
      image: goldenCornPizza,
      price: 99,
      description: "Delicious pizza topped with sweet golden corn and extra cheese.",
      category: "Pizza",
      rating: 4.5
    },
    {
      id: 3,
      name: "Crispy Paneer Burger",
      image: creespyPaneerBurger,
      price: 169,
      description: "Crunchy paneer patty with fresh veggies and a tangy sauce.",
      category: "Burger",
      rating: 4.3
    },
    {
      id: 4,
      name: "Cheese Bomb Burger",
      image: cheeseBombBurger,
      price: 139,
      description: "A juicy burger filled with gooey melted cheese and crispy toppings.",
      category: "Burger",
      rating: 4.6
    },
    {
      id: 5,
      name: "Classic Veg Sandwich",
      image: classicVegSandwich,
      price: 69,
      description: "Simple yet tasty sandwich with fresh veggies and creamy mayo.",
      category: "Sandwich",
      rating: 4.2
    },
    {
      id: 6,
      name: "Paneer Sandwich",
      image: paneerSandwich,
      price: 109,
      description: "Soft bread packed with flavorful paneer and spicy seasoning.",
      category: "Sandwich",
      rating: 4.4
    },
    {
      id: 7,
      name: "Crinkle Fries",
      image: crinkleFries,
      price: 59,
      description: "Crispy, crinkle-cut fries with a perfect balance of crunch and flavor.",
      category: "Fries",
      rating: 4.1
    },
    {
      id: 8,
      name: "Cheesy Crinkle Fries",
      image: cheesyCrinkleFries,
      price: 109,
      description: "Golden crinkle fries topped with creamy melted cheese.",
      category: "Fries",
      rating: 4.5
    },
    {
      id: 9,
      name: "Veg Momos",
      image: vegMomos,
      price: 89,
      description: "Steamed dumplings filled with fresh vegetable stuffing and served with spicy dip.",
      category: "Momos",
      rating: 4.3
    },
    {
      id: 10,
      name: "Red Sauce Pasta",
      image: redSaucePasta,
      price: 179,
      description: "Pasta cooked in rich, tangy tomato sauce with herbs and cheese.",
      category: "Pasta",
      rating: 4.6
    },
    {
      id: 11,
      name: "White Sauce Pasta",
      image: whiteSaucePasta,
      price: 199,
      description: "Creamy white sauce pasta with cheese and exotic herbs.",
      category: "Pasta",
      rating: 4.7
    },
    {
      id: 12,
      name: "Aloo Veggie Wrap",
      image: alooVeggieWrap,
      price: 89,
      description: "Spicy potato stuffing wrapped with fresh veggies in a soft tortilla.",
      category: "Wraps",
      rating: 4.2
    },
    {
      id: 13,
      name: "Crunchy Paneer Wrap",
      image: crunchyPaneerWrap,
      price: 129,
      description: "Paneer cubes tossed in spices, wrapped in a soft tortilla.",
      category: "Wraps",
      rating: 4.5
    },
    {
      id: 14,
      name: "Classic Garlic Bread",
      image: classicGarlicBread,
      price: 99,
      description: "Toasty garlic bread topped with butter and aromatic herbs.",
      category: "Breads",
      rating: 4.4
    },
    {
      id: 15,
      name: "Oreo Shake",
      image: oreoShake,
      price: 89,
      description: "Thick, creamy shake blended with Oreo cookies and chocolate syrup.",
      category: "Shakes",
      rating: 4.6
    },
    {
      id: 16,
      name: "Banana Shake",
      image: bananaShake,
      price: 79,
      description: "Refreshing banana shake made with creamy milk and a hint of vanilla.",
      category: "Shakes",
      rating: 4.3
    },
    {
      id: 17,
      name: "Ice Cream Sundae",
      image: icecreamSundae,
      price: 69,
      description: "A delightful sundae with scoops of ice cream, chocolate sauce, and nuts.",
      category: "Dessert",
      rating: 4.2
    },
    {
      id: 18,
      name: "Brownie",
      image: brownie,
      price: 79,
      description: "Rich, fudgy brownie with a crisp top and soft, gooey center.",
      category: "Dessert",
      rating: 4.5
    }
  ];

  