import React, { Component } from 'react';
import { Navigator as RNNavigator } from 'react-native';
import NavigatorService from '../services/navigator-service';
import style from '../style/navigator';
import ROUTES from '../config/routes';

/**
 * <Navigator />
 * The apps navigator, uses React Native navigator
 */
class Navigator extends Component
{
    static get routes () {
        return ROUTES;
    }

    /**
     * Disable routing swipe
     * Thanks to
     * @source http://stackoverflow.com/questions/36007335/how-can-i-disable-swipe-back-in-react-native-navigator
     * @param {Object} route
     * @returns {Object}
     */
    static configureScene (route) {
        if (route.sceneConfig) {
            return route.sceneConfig;
        }

        return {
            ...RNNavigator.SceneConfigs.FloatFromRight,
            gestures: {},
        };
    }

    /**
     * Create a new Navigator
     */
    constructor () {
        super();

        this.renderScene = this.renderScene.bind(this);
    }

    /**
     * Render a particular scene
     * @param {Object} route
     * @param {Object} navigator
     * @returns {*}
     */
    renderScene (route, navigator) {
        const component = route.component;
        const props = { ...this.props };

        delete props.onInit;

        if (component) {
            return (
              <route.component
                title={route.component}
                navigator={navigator}
                {...this.props}
              />
            );
        }

        return null;
    }

    /**
     * Render the navigator
     * @returns {XML}
     */
    render () {
        const { routes } = Navigator;

        return (
          <RNNavigator
            ref={NavigatorService.init}
            configureScene={Navigator.configureScene}
            initialRoute={routes[0]}
            initialRouteStack={routes}
            renderScene={this.renderScene}
            style={style.navigator}
          />
        );
    }
}

export default Navigator;
