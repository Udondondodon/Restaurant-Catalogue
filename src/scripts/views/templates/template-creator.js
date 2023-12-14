import CONFIG from '../../global/config';

const createRestaurantList = (restaurant) => `
  <div class="container-list">
    <a href="#/detail/${restaurant.id}">
      <img src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="Foto Restoran ${restaurant.name}">
      <h3>${restaurant.name}</h3>
      <p>${restaurant.city}</p>
    </a>
  </div>
`;

const createRestaurantDetail = (restaurant) => `
  <div class="container-detail">
    <div class="head">
      <h2>${restaurant.name}</h2>
      <img src="${CONFIG.BASE_IMAGE + restaurant.pictureId}" alt="Foto Restoran${restaurant.name}"/>
    </div>
    <div class="body">
      <p id="address">${restaurant.city} - ${restaurant.address}</p>
      <p>${restaurant.description}</p>
    </div>
    <div class="menu">
      <h4>Food Menu</h4>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
      <h4>Drink Menu</h4>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
      <h4>Review</h4>
      <ul id="review">
        ${restaurant.customerReviews.map((review) => `
          <li>
          <p><strong>Nama : ${review.name}</strong></p>
            <p>Tanggal : ${review.date}</p>
            <p>Review : ${review.review}</p>
          </li>
         `).join('')}
        </ul>
      </div>
    </div>
    <div class="form">
      <div class="form-group"> 
        <label for="inputReviewName">Nama: </label>
        <input type="text" id="inputReviewName" class="form-control" placeholder="Masukkan nama mu disini"/>
      </div>
      <div class="form-group">
        <label for="inputReview">Review: </label>
        <textarea type="text" id="inputReview" rows="6" placeholder="Masukkan review mu disini"></textarea>
      </div>
      <div class="form-group">
      <button id="buttonSave">Kirim Review</button>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button id="likeButton" class="like">
    <i class="fa fa-heart-o"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button id="likeButton" class="like">
    <i class="fa fa-heart"></i>
  </button>
`;

export {
  createRestaurantList,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
