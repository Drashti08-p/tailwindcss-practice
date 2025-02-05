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
    <div
      class="flex justify-between items-center p-4 max-w-[1400px] mx-auto md:space-y-0"
    >
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
          <router-link
            :to="{ name: 'home' }"
            class="text-white hover:text-gray-400"
          >
            Home
          </router-link>
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
    <!-- Images -->
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
          <div>
            <div class="test justify-center d-flex align-center">
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
        <div
          class="flex justify-between items-center space-x-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
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
            <font-awesome-icon :icon="['far', 'eye']" class="text-gray-600" />
            <font-awesome-icon
              :icon="['far', 'heart']"
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
    <!-- Banner -->
    <section>
      <div class="max-w-[1400px] mx-auto mb-6">
        <img src="@/assets/images/Bannar1.png" height="536px" width="1400px" />
      </div>
    </section>
    <!-- Hot Deals -->
    <section class="py-8" style="background-color: #f7f7f7">
      <div
        class="max-w-[1400px] mx-auto mb-6 flex justify-between items-center"
      >
        <h2 class="text-2xl font-bold">Hot Deals</h2>
        <a href="#" class="text-green-600 font-bold">
          View All <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </a>
      </div>
      <div
        class="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1"
      >
        <div
          class="bg-white p-4 shadow-md flex flex-col items-center justify-center h-[660px] border border-gray-300 transition duration-300 hover:ring-2 hover:ring-green-500 hover:shadow-lg col-span-2 row-span-2 relative"
        >
          <img
            src="@/assets/images/d1.jpeg"
            alt="product image"
            class="w-full h-64 object-cover mb-2"
          />
          <div class="absolute top-2 left-2 flex space-x-2">
            <span
              class="bg-red-500 text-white px-4 py-2 text-xs rounded font-bold"
              >Sale 50%</span
            >
            <span
              class="bg-blue-500 text-white px-4 py-2 text-xs rounded font-bold"
              >Best Sale</span
            >
          </div>
          <div class="text-center mt-6">
            <div class="flex space-x-2">
              <div
                class="bg-gray-200 rounded-full p-4 flex items-center justify-center w-12 h-12"
                style="background-color: #f2f2f2"
              >
                <font-awesome-icon
                  :icon="['far', 'heart']"
                  class="text-xl text-black"
                />
              </div>
              <button
                class="bg-green-500 text-white py-2 rounded-full mb-2 font-bold"
                style="width: 371px"
              >
                Add to Cart
              </button>
              <div
                class="bg-gray-200 rounded-full p-4 flex items-center justify-center w-12 h-12"
                style="background-color: #f2f2f2"
              >
                <font-awesome-icon
                  :icon="['far', 'eye']"
                  class="text-xl text-black"
                />
              </div>
            </div>

            <h3 class="text-base font-bold mt-6">Chinese cabbage</h3>
            <p class="text-sm text-gray-600">
              $12.00 <span class="line-through">$24.00</span>
            </p>
            <div class="flex items-center justify-center">
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon
                icon="fas fa-star-half-alt"
                class="text-yellow-500"
              />
              <span class="text-sm text-gray-500 ml-2">(524 Feedback)</span>
            </div>
            <p class="text-sm text-gray-400 mt-6">Hurry up! Offer ends in:</p>
            <div class="flex justify-center space-x-2 mt-1">
              <div class="text-center">
                <span class="text-lg font-bold">01</span>
                <p class="text-xs text-gray-400">DAYS</p>
              </div>
              <div class="text-center">
                <span class="text-lg font-bold">23</span>
                <p class="text-xs text-gray-400">HOURS</p>
              </div>
              <div class="text-center">
                <span class="text-lg font-bold">:</span>
              </div>
              <div class="text-center">
                <span class="text-lg font-bold">34</span>
                <p class="text-xs text-gray-400">MINS</p>
              </div>
              <div class="text-center">
                <span class="text-lg font-bold">:</span>
              </div>
              <div class="text-center">
                <span class="text-lg font-bold">57</span>
                <p class="text-xs text-gray-400">SECS</p>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="product in hotDealsProducts"
          :key="product.title"
          class="bg-white p-4 shadow-md flex flex-col justify-between h-[327px] border border-gray-300 transition duration-300 hover:ring-2 hover:ring-green-500 hover:shadow-lg relative"
        >
          <img
            :src="product.icon"
            alt="product image"
            class="w-full h-32 object-cover mb-2"
          />
          <div class="text-left absolute bottom-2 left-2">
            <h3 class="text-base font-bold">{{ product.title }}</h3>
            <p class="text-sm text-gray-600">
              ${{ product.price }}
              <span class="line-through" v-if="product.oldPrice"
                >${{ product.oldPrice }}</span
              >
            </p>
            <div class="flex items-center">
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon icon="fas fa-star" class="text-yellow-500" />
              <font-awesome-icon
                icon="fas fa-star-half-alt"
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
    <!-- Sale offer banner -->
    <section class="bg-white py-6">
      <div class="max-w-[1400px] mx-auto relative rounded-xl overflow-hidden">
        <!-- Background Image -->
        <img
          src="@/assets/images/banner2.jpeg"
          class="w-full h-64 object-cover"
        />

        <!-- Text Overlay -->
        <div class="absolute inset-0 flex items-center justify-end pr-12">
          <div class="text-white max-w-md">
            <p class="uppercase text-sm tracking-wide">Summer Sale</p>
            <h2 class="text-4xl font-bold mt-2">
              <span class="text-orange-400">37%</span> OFF
            </h2>
            <p class="text-gray-300 mt-3 text-sm">
              Free on all your orders, Free Shipping, and 30 days money-back
              guarantee.
            </p>

            <!-- Shop Now Button -->
            <button
              class="mt-5 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition"
              style="background-color: #00b207"
            >
              Shop now &nbsp;
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Client feedback -->
    <section style="background-color: #f7f7f7; padding: 40px 0">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl font-bold">Client Testimonials</h2>
          <div class="flex space-x-2">
            <div class="rounded-full p-4 flex items-center w-12 h-12 bg-white">
              <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </div>
            <div class="space-x-2">
              <div
                style="background-color: #00b207"
                class="rounded-full p-4 flex items-center justify-center bg-white w-12 h-12"
              >
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <img src="@/assets/images/Vector.png" />
            <p class="text-gray-600 mb-4 pt-4">
              Pellentesque eu nibh eget mouris congue mottis mottis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div style="display: flex">
              <img
                src="@/assets/images/u1.jpeg"
                class="h-11 w-11 rounded-full"
              />
              <div class="ml-4 flex" style="width: 400px">
                <div>
                  <div class="font-semibold">Robert Fox</div>
                  <div class="text-sm text-gray-500">Customer</div>
                </div>

                <div class="ml-auto">
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
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <img src="@/assets/images/Vector.png" />
            <p class="text-gray-600 mb-4 pt-4">
              Pellentesque eu nibh eget mouris congue mottis mottis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div style="display: flex">
              <img
                src="@/assets/images/u1.jpeg"
                class="h-11 w-11 rounded-full"
              />
              <div class="ml-4 flex" style="width: 400px">
                <div>
                  <div class="font-semibold">Robert Fox</div>
                  <div class="text-sm text-gray-500">Customer</div>
                </div>

                <div class="ml-auto">
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
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <img src="@/assets/images/Vector.png" />
            <p class="text-gray-600 mb-4 pt-4">
              Pellentesque eu nibh eget mouris congue mottis mottis nec tellus.
              Phasellus imperdiet elit eu magna dictum, bibendum cursus velit
              sodales. Donec sed neque eget
            </p>
            <div style="display: flex">
              <img
                src="@/assets/images/u1.jpeg"
                class="h-11 w-11 rounded-full"
              />
              <div class="ml-4 flex" style="width: 400px">
                <div>
                  <div class="font-semibold">Robert Fox</div>
                  <div class="text-sm text-gray-500">Customer</div>
                </div>

                <div class="ml-auto">
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Instagram follow images -->
    <section class="py-6">
      <div class="max-w-[1400px] mx-auto mt-2">
        <div>
          <h2 class="text-2xl font-extrabold text-center">
            Follow us on Instagram
          </h2>
        </div>
        <div class="image-container mt-6">
          <div
            v-for="image in images"
            :key="image.url"
            class="relative image-item"
          >
            <img :src="image.url" class="image-resolution" />
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-white absolute inset-0 m-auto w-12 h-12 opacity-75"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="bg-gray-100 py-6">
      <div class="max-w-[1400px] mx-auto mt-2">
        <div class="flex justify-between">
          <div>
            <h2 class="text-2xl font-extrabold">Subscribe to our Newsletter</h2>
            <p class="text-gray-500">
              Pellentesque eu nibh eget mauris congue mattis mattis nec
              tellus.<br />
              Phasellus imperdiet elit eu magna.
            </p>
          </div>
          <div class="relative flex">
            <input type="text" class="input-design" />
            <button class="absolute right-0 subscribe">Subscribe</button>
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-black inset-0 m-auto w-12 h-12 opacity-75"
            />
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-gray-100 py-6">
      <div class="max-w-[1400px] mx-auto mt-2">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div class="text-left md:text-left">
            <h2 class="text-2xl font-extrabold">Subscribe to our Newsletter</h2>
            <p class="text-gray-500">
              Pellentesque eu nibh eget mauris congue mattis mattis nec
              tellus.<br />
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div class="flex items-center relative w-full">
            <input
              type="text"
              class="input-design border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email address"
            />
            <button
              class="absolute right-0 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
            <!-- Instagram Icon at the far right -->
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-black w-12 h-12 opacity-75 ml-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="py-12 bg-black text-white">
      <div class="max-w-[1400px] mx-auto mt-2">
        <div class="flex flex-col md:flex-row items-start justify-between">
          <div class="flex-grow md:flex-grow-0 mb-4 md:mb-0 w-full md:w-auto">
            <div class="flex items-center mb-4">
              <img
                src="@/assets/images/Group.png"
                alt="Ecobazar Logo"
                class="h-8 w-8 mr-2"
              />
              <span class="text-2xl font-bold">Ecobazar</span>
            </div>
            <div class="leading-[1.4rem] text-gray-500">
              Morbi cursus porttitor enim lobortis molestie.<br />
              Duis gravida turpis dui, eget bibendum magna<br />
              congue nec.
            </div>
            <div class="mt-4 flex items-center">
              <p class="text-gray-500 whitespace-nowrap">(210) 555-0114 Or</p>
              <p class="text-gray-500 ml-2 whitespace-nowrap">
                proxy@gmail.com
              </p>
            </div>
          </div>

          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 lg:gap-32 xl:gap-48 md:items-start"
          >
            <div>
              <h3 class="font-medium">My Account</h3>
              <ul class="mt-3 space-y-2">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >My Account</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Order History</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Shopping Cart</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Wishlist</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Helps</h3>
              <ul class="mt-3 space-y-1">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">Contact</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">FAQs</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Terms & Condition</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Privacy Policy</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Proxy</h3>
              <ul class="mt-3 space-y-1">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">About</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">Shop</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white">Product</a>
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Frock Order</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-medium">Categories</h3>
              <ul class="mt-3 space-y-1">
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Fruit & Vegetables</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Meat & Fish</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Bread & Bakery</a
                  >
                </li>
                <li>
                  <a href="#" class="text-gray-400 hover:text-white"
                    >Beauty & Health</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
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
import img16 from "@/assets/images/p6.jpeg";
import img17 from "@/assets/images/p7.jpeg";
import img18 from "@/assets/images/p8.jpeg";
import img19 from "@/assets/images/p9.jpeg";
import img20 from "@/assets/images/p10.jpeg";
import img21 from "@/assets/images/i1.jpeg";
import img22 from "@/assets/images/i2.jpeg";
import img23 from "@/assets/images/i3.jpeg";
import img24 from "@/assets/images/i4.jpeg";
import img25 from "@/assets/images/i5.jpeg";
import img26 from "@/assets/images/i6.jpeg";

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
const hotDealsProducts = [
  {
    title: "Chinese cabbage",
    icon: img11,
    price: "12.00",
  },
  {
    title: "Green Lettuce",
    icon: img11,
    price: "9.00",
  },
  {
    title: "Eggplant",
    icon: img13,
    price: "34.00",
  },
  {
    title: "Fresh Cauliflower",
    icon: img14,
    price: "12.00",
  },
  {
    title: "Green Capsicum",
    icon: img14,
    price: "9.00",
    oldPrice: "20.00",
  },
  {
    title: "Green Chili",
    icon: img16,
    price: "34.00",
  },
  {
    title: "Big Potatoes",
    icon: img17,
    price: "12.00",
  },
  {
    title: "Corn",
    icon: img18,
    price: "12.00",
  },
  {
    title: "Red Chili",
    icon: img19,
    price: "12.00",
  },
  {
    title: "Red Tomatoes",
    icon: img20,
    price: "9.00",
    oldPrice: "20.00",
  },
  {
    title: "Red Tomatoes",
    icon: img20,
    price: "9.00",
    oldPrice: "20.00",
  },
];
const images = [
  {
    url: img21,
  },
  {
    url: img22,
  },
  {
    url: img23,
  },
  {
    url: img24,
  },
  {
    url: img25,
  },
  {
    url: img26,
  },
];
</script>
<style scoped>
.test {
  background-image: url("@/assets/images/bg-2.jpeg");
  height: 288px;
  width: 423px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-container {
  display: flex;
  justify-content: flex-start; /* Align items to the start of the row */
  flex-wrap: nowrap; /* Prevent the images from wrapping to the next line */
  gap: 20px; /* Optional, adds space between the images */
}

.image-item {
  display: flex;
  align-items: center; /* Vertically center the images if necessary */
}
.image-resolution {
  height: 200px;
  width: 330px;
  border-radius: 8px;
}
.input-design {
  border: 1px solid;
  border-radius: 48px;
  background-color: white;
  width: 536px;
  height: 52px;
}
.subscribe {
  color: white;
  font-size: larger;
  background-color: #00b207;
  width: 200px;
  height: 52px;
  border-radius: 48px;
}
</style>