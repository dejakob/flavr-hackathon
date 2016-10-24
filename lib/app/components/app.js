import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import SideNav from './side-nav';
import style from '../style/app';
import Navigator from './navigator';
import store from '../store/store';
import connectRelay from '../connectors/relay';

/**
 * <App />
 * Main component of the application
 *
 * @property {Object} allMeals
 * @property {Object} allChefs
 */
class App extends Component
{
    static get propTypes () {
        return {
            allMeals: React.PropTypes.object,
            allChefs: React.PropTypes.object
        };
    }

    /**
     * List of meals
     * @returns {Array.<Object>}
     */
    get meals () {
        return this.props.allMeals.meals;
    }

    /**
     * List of chefs
     * @returns {Array.<Object>}
     */
    get chefs () {
        return this.props.allChefs.chefs;
    }

    /**
     * Render the app component
     * @returns {XML}
     */
    render () {
        return (
          <SideNav>
            <View
              style={style.app}
            >
              <Provider
                store={store}
              >
                <Navigator
                  meals={this.meals}
                  chefs={this.chefs}
                />
              </Provider>
            </View>
          </SideNav>
    );
    }
}

export default connectRelay(App);
