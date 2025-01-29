<template>
  <div class="font-sans">
    <div class="border-b border-gray-200">
      <header class="max-w-[1400px] mx-auto">
        <!-- Top Header Line -->
        <div class="text-gray-600 text-sm p-2 flex justify-between">
          <div class="flex items-center">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
            &nbsp; Store Location: Lincoln- 344, Illinois, Chicago, USA
          </div>
          <div>
            <span class="mr-4">Eng ▼</span>
            <span>USD ▼</span>
            <span class="mr-4">Sign In / Sign Up</span>
          </div>
        </div>
      </header>
    </div>

    <!-- Logo and Search Bar -->
    <div class="flex justify-between items-center p-4 max-w-[1400px] mx-auto">
      <div class="text-2xl font-bold text-green-600">
        <img src="@/assets/images/Logo (1).png" />
      </div>
      <div class="flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder="Search"
          class="flex-grow border border-gray-300 rounded-l px-3 py-2"
        />
        <button class="bg-green-600 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </div>
      <div class="flex items-center">
        <font-awesome-icon :icon="['fas', 'heart']" />
        <div class="relative pl-2">
          <font-awesome-icon :icon="['fas', 'bag-shopping']" />
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-0"
            >2</span
          >
        </div>
        <span class="ml-2 text-gray-700">$57.00</span>
      </div>
    </div>
    <!-- Navigation Menu -->
    <nav class="bg-gray-800 text-white">
      <div
        class="container px-4 py-3 flex justify-between items-center max-w-[1400px] mx-auto"
      >
        <div class="flex space-x-4">
          <a href="#" class="text-white hover:text-gray-400">Home</a>
          <a href="#" class="text-white hover:text-gray-400">Shop</a>
          <a href="#" class="text-white hover:text-gray-400">Pages</a>
          <a href="#" class="text-white hover:text-gray-400">Blog</a>
          <a href="#" class="text-white hover:text-gray-400">About Us</a>
          <a href="#" class="text-white hover:text-gray-400">Contact Us</a>
        </div>
        <div class="flex items-center space-x-2">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </nav>
    <section>
      <div
        class="flex space-x-4 max-w-[1400px] mx-auto relative text-white p-8 rounded-lg"
      >
        <img
          src="@/assets/images/background-banner.jpeg"
          alt="Organic Food"
          class="rounded-lg"
          width="872px"
          height="600px"
        />
        <div class="absolute flex flex-col p-4">
          <h1 class="text-5xl font-bold mt-20 font-sans align-start">
            Fresh & Healthy
          </h1>
          <h1 class="text-5xl font-bold font-sans">Organic Food</h1>
          <div class="mt-4 font-sans text-white font-bold">
            Sale up to
            <span
              class="bg-orange-500 rounded-md inline-block px-4 py-2 text-xl"
              >30% OFF</span
            >
          </div>
          <p class="mt-2 text-sm">Free shipping on all your order.</p>
          <div>
            <button
              class="mt-4 bg-white text-lime-600 font-bold py-2 rounded-full font-sans min-w-40"
            >
              Shop now &nbsp;
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
        <div class="flex-wrap">
          <div class="flex relative">
            <img
              src="@/assets/images/BG.png"
              class="py-5 pt-1"
              height="288px"
              width="423px"
            />
            <div class="absolute flex flex-col p-8">
              <h1 class="text-black align-start text-xl">Summer Sale</h1>
              <h1 class="align-start text-black text-3xl">75 % OFF</h1>
              <div class="mt-4">
                <p class="text-gray-600 font-sans text-sm">
                  Only Fruit & Vegetables
                </p>
                <a
                  href="#"
                  class="mt-2 text-lime-600 font-extrabold rounded-full font-sans inline-block"
                >
                  Shop now &nbsp;
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
              </div>
            </div>
          </div>
          <div class="flex relative">
            <img
              src="@/assets/images/bg-2.jpeg"
              class="rounded-lg"
              height="288px"
              width="423px"
            />
            <div class="absolute inline-block">
              <h2 class="text-white align-start text-sm font-bold align-middle">
                BEST DEAL
              </h2>
              <h1 class="text-3xl font-bold align-middle">
                Special Products <br />
                Deal of the Month
              </h1>
              <button
                class="mt-4 text-white-600 font-bold rounded-full font-sans align-start"
              >
                Shop now &nbsp;
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Single Card Section -->
    <section class="bg-white py-8">
      <div class="max-w-[1400px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <div class="flex justify-between items-center space-x-4">
          <div
            v-for="card in cardData"
            :key="card.title"
            class="flex items-center space-x-4"
          >
            <img :src="card.icon" alt="icon" class="w-10 h-10" />
            <div>
              <h3 class="text-lg font-bold">{{ card.title }}</h3>
              <p class="text-sm text-gray-600">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Categories -->
    <section class="bg-white py-8">
      <div
        class="max-w-[1400px] mx-auto mb-6 flex justify-between items-center"
      >
        <h2 class="text-2xl font-bold">Popular Categories</h2>
        <a href="#" class="text-green-600 font-bold"
          >View All <font-awesome-icon :icon="['fas', 'arrow-right']"
        /></a>
      </div>
      <div
        class="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        <div
          v-for="categories in categories"
          :key="categories.title"
          class="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center h-48 border border-gray-300 transition duration-300 hover:ring-2 hover:ring-green-500 hover:shadow-lg"
        >
          <img
            :src="categories.icon"
            alt="icon"
            class="w-[8rem] h-[8rem] mb-2"
          />
          <h3 class="text-base font-bold text-center">
            {{ categories.title }}
          </h3>
        </div>
      </div>
    </section>
    <!-- Products -->
    <section class="bg-white py-8">
      <div
        class="max-w-[1400px] mx-auto mb-6 flex justify-between items-center"
      >
        <h2 class="text-2xl font-bold">Popular Products</h2>
        <a href="#" class="text-green-600 font-bold">
          View All <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </a>
      </div>
      <div
        class="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
      >
        <div
          v-for="product in products"
          :key="product.title"
          class="bg-white p-4 shadow-md flex flex-col items-center justify-center h-[327px] border border-gray-300 transition duration-300 hover:ring-2 hover:ring-green-500 hover:shadow-lg relative"
        >
          <img
            :src="product.icon"
            alt="product image"
            class="w-full h-32 object-cover mb-2"
          />
          <div class="absolute top-4 left-4 flex items-center space-x-2">
            <span class="bg-red-600 text-white text-xs px-2 py-1 rounded"
              >Sale 50%</span
            >
          </div>
          <div class="absolute top-4 right-4">
            <font-awesome-icon :icon="['fas', 'eye']" class="text-gray-600" />
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-red-500 ml-2"
            />
          </div>
          <div class="absolute bottom-4 left-4 text-left">
            <h3 class="text-base font-bold">{{ product.title }}</h3>
            <p class="text-sm text-gray-600">${{ product.price }}</p>
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="text-yellow-500"
              />
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="text-yellow-500"
              />
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="text-yellow-500"
              />
              <font-awesome-icon
                :icon="['fas', 'star']"
                class="text-yellow-500"
              />
              <font-awesome-icon
                :icon="['fas', 'star-half-alt']"
                class="text-yellow-500"
              />
            </div>
          </div>
          <div class="absolute bottom-6 right-4 flex space-x-2">
            <div
              class="bg-gray-200 rounded-full p-4 flex items-center justify-center w-12 h-12"
              style="background-color: #f2f2f2"
            >
              <font-awesome-icon
                :icon="['fas', 'shopping-bag']"
                class="text-xl text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-[1323px] mx-auto mb-6">
        <img src="@/assets/images/Bannar1.png" height="536px" width="1320px" />
      </div>
    </section>
    <section class="py-8">
      <div class="max-w-[1323px] mx-auto mb-6">
        <img src="@/assets/images/Bannar1.png" height="536px" width="1320px" />
      </div>
    </section>
  </div>
</template>

<script setup>
import img1 from "@/assets/images/delivery-truck 1.png";
import img2 from "@/assets/images/headphones.png";
import img3 from "@/assets/images/shopping-bag.png";
import img4 from "@/assets/images/package.png";
import img5 from "@/assets/images/c1.png";
import img6 from "@/assets/images/c2.png";
import img7 from "@/assets/images/c3.png";
import img8 from "@/assets/images/c4.png";
import img9 from "@/assets/images/c5.png";
import img10 from "@/assets/images/c6.png";
import img11 from "@/assets/images/p1.jpeg";
import img13 from "@/assets/images/p3.jpeg";
import img14 from "@/assets/images/p4.jpeg";
import img15 from "@/assets/images/p5.jpeg";
import img16 from "@/assets/images/p6.jpeg";
import img17 from "@/assets/images/p7.jpeg";
import img18 from "@/assets/images/p8.jpeg";
import img19 from "@/assets/images/p9.jpeg";
import img20 from "@/assets/images/p10.jpeg";

const cardData = [
  {
    title: "Free Shipping",
    desc: "Free shipping on all your order",
    icon: img1,
  },
  {
    title: "Customer Support 24/7",
    desc: "Free shipping on all your order",
    icon: img2,
  },
  {
    title: "100% Secure Payment",
    desc: "Free shipping on all your order",
    icon: img3,
  },
  {
    title: "Free Shipping",
    desc: "Free shipping on all your order",
    icon: img4,
  },
];
const categories = [
  {
    title: "Fresh Fruit",
    icon: img5,
  },
  {
    title: "Fresh Vegetables",
    icon: img6,
  },
  {
    title: "Meat & Fish",
    icon: img6,
  },
  {
    title: "Snacks",
    icon: img7,
  },
  {
    title: "Beverages",
    icon: img8,
  },
  {
    title: "Beauty & Health",
    icon: img9,
  },
  {
    title: "Bread & Bakery",
    icon: img5,
  },
  {
    title: "Baking Needs",
    icon: img6,
  },
  {
    title: "Cooking",
    icon: img6,
  },
  {
    title: "Diabetic Food",
    icon: img7,
  },
  {
    title: "Dish Detergents",
    icon: img10,
  },
  {
    title: "Oil",
    icon: img9,
  },
];
const products = [
  {
    title: "Fresh Fruit",
    icon: img11,
    price: "10.00",
  },
  {
    title: "Fresh Vegetables",
    icon: img11,
    price: "10.00",
  },
  {
    title: "Meat & Fish",
    icon: img13,
    price: "10.00",
  },
  {
    title: "Snacks",
    icon: img14,
    price: "10.00",
  },
  {
    title: "Beverages",
    icon: img14,
    price: "10.00",
  },
  {
    title: "Beauty & Health",
    icon: img16,
    price: "10.00",
  },
  {
    title: "Bread & Bakery",
    icon: img17,
    price: "10.00",
  },
  {
    title: "Baking Needs",
    icon: img18,
    price: "10.00",
  },
  {
    title: "Cooking",
    icon: img19,
    price: "10.00",
  },
  {
    title: "Cooking",
    icon: img20,
    price: "10.00",
  },
];
</script>