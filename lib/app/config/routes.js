import MealsSwiper from '../../meals-swiper/components/meals-swiper';
import ChefsMemory from '../../chefs-memory/components/chefs-memory';

/*
  The routes constant that can be used by the navigator and the side navigation
 */
const ROUTES = [
    { key: 'food-swipe', label: 'Food Swiper', component: MealsSwiper, index: 0 },
    { key: 'chefs-memory', label: 'Chefs Memory', component: ChefsMemory, index: 1 },
];

export default ROUTES;
