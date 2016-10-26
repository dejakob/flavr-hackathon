import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import style from '../style/meal-card';

/**
 * <MealCard />
 * @property {Object} meal
 * @property {String} meal.title
 * @property {String} meal.picture
 */
class MealCard extends Component
{
    static get propTypes () {
        return {
            meal: React.PropTypes.object
        };
    }

    /**
     * Meal of the card
     * @returns {Object}
     */
    get meal () {
        return this.props.meal;
    }

    /**
     * Title of the meal
     * @returns {String}
     */
    get mealTitle () {
        return this.meal.title;
    }

    /**
     * Main picture of the meal
     * @returns {Object}
     */
    get mealPicture () {
        return {
            uri: this.meal.picture,
        };
    }

    /**
     * Render the Meal Card
     * @returns {XML}
     */
    render () {
        return (
          <View
            style={style.card}
          >
            <Image
              style={style.image}
              source={this.mealPicture}
              resizeMode="cover"
            />
            <Text
              style={style.caption}
            >
              {this.mealTitle}
            </Text>
          </View>
        );
    }
}

export default MealCard;
