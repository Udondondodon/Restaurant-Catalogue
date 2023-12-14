import FavoriteRestaurantIdb from '../../data/favorite-restaurant';
import { createRestaurantList } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div id="loading-screen">
          <div class="loader"></div>
        </div>
        <h2>Restoran Favoritmu</h2>
        <div class="restaurant-list" id="restaurant-list"></div>
    `;
  },

  async afterRender() {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
      const restaurantContainer = document.querySelector('#restaurant-list');
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantList(restaurant);
      });
    } catch (error) {
      showResponseMessage(error);
    }
  },
};

export default Favorite;
