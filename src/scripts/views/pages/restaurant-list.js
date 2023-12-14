import Restaurant from '../../data/restaurant-source';
import { createRestaurantList } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div id="loading-screen">
        <div class="loader"></div>
      </div>
      <h2>Katalog Restoran</h2>
      <div class="restaurant-list" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const restaurant = await Restaurant.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurant.forEach((restaurantItem) => {
      restaurantContainer.innerHTML += createRestaurantList(restaurantItem);
    });
  },
};

export default Home;
