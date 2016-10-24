/**
 *
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Relay from 'react-relay';
import config from './config';
import App from './lib/app/components/app';
import MealsRoute from './lib/routes/meals.route';

Relay.injectNetworkLayer(
    new Relay.DefaultNetworkLayer(`${config.graphqlURL}${config.paths.meal}`)
);

class FlavrHackathon extends Component {
    render() {
        const mealsRoute = new MealsRoute();

        return (
            <Relay.RootContainer
                Component={App}
                route={mealsRoute}
            />
        );
    }
}

AppRegistry.registerComponent('FlavrHackathon', () => FlavrHackathon);
