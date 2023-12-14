import Restaurant from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetail } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="loading-screen">
        <div class="loader"></div>
      </div>
      <div id="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Restaurant.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-restaurant');
    restaurantContainer.innerHTML += createRestaurantDetail(restaurant);

    const submitForm = document.querySelector('#buttonSave');
    const nameInput = document.getElementById('inputReviewName');
    const reviewInput = document.getElementById('inputReview');
    submitForm.addEventListener('click', async (e) => {
      e.stopPropagation();
      const review = {
        id: restaurant.id,
        name: nameInput.value,
        review: reviewInput.value,
      };
      Restaurant.insertReview(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
