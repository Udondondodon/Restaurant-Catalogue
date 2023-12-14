import API_ENDPOINT from '../global/api-endpoint';

class Restaurant {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);

    if (response.status === 200) {
      const responseJson = await response.json();
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
      return responseJson.restaurants;
    }
    throw new Error(`Failed to fetch restaurants: ${response.status}`);
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    if (response.status === 200) {
      const responseJson = await response.json();
      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        loadingScreen.style.display = 'none';
      }
      return responseJson.restaurant;
    }
    throw new Error(`Failed to fetch restaurants: ${response.status}`);
  }

  static async insertReview(review) {
    const showResponseMessage = (message = 'Check your internet connection') => {
      alert(message);
    };
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: review.id,
          name: review.name,
          review: review.review,
        }),
      });
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      window.location.reload();
    } catch (error) {
      showResponseMessage(error);
    }
  }
}

export default Restaurant;
