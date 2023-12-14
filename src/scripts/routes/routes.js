import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestaurantList,
  '/detail/:id': RestaurantDetail,
  '/favorite': Favorite,
};

export default routes;
