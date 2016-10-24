 import React, { Component } from 'react';
 import SwipeCards from 'react-native-swipe-cards';
 import { View } from 'react-native';

 import MealCard from './meal-card';
 import style from '../style/meals-swiper';

 /**
  * <MealsSwiper />
  * @property {Array.<Object>} meals
  */
 class MealsSwiper extends Component {

     static get propTypes () {
         return {
             meals: React.PropTypes.arrayOf(Object),
         };
     }

       /**
        * Create MealsSwiper Component
        */
     constructor () {
         super();

         this.handleYup = this.handleYup.bind(this);
         this.handleNope = this.handleNope.bind(this);

         this.yups = 0;
         this.nopes = 0;
     }

     /**
      * Handle swipe right (YES) gesture
      * Should also be the handleYup prop of SwipeCards
      */
     handleYup () {
         this.yups += 1;

         // Todo: show dialog/alert on 5 jups!
     }

     /**
      * Handle swipe left (NO) gesture
      * Should also be the handleNope prop of SwipeCards
      */
     handleNope () {
         this.nopes += 1;
     }

     render () {
         return (
           <SwipeCards
             containerStyle={style.swiper}
             cards={this.props.meals}

             renderCard={meal => <MealCard meal={meal} />}
             renderNoMoreCards={() => <View />}
           />
     );
     }
 }

 export default MealsSwiper;
