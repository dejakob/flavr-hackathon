import Relay from 'react-relay';

/**
 * Relay Route to fetch the data via GraphQL
 *
 * Note:
 *  This is the most basic implementation of fetching two lists via Relay.
 *  If you want to know more about the topic,
 *  Check out @source https://facebook.github.io/relay/
 *
 * Read the data with this curl:
 *  curl -XPOST -H "Content-Type:application/graphql"  -d 'query RotQueryType { all { title } }' http://localhost:3000/meal
 */
class MealsRoute extends Relay.Route {

    /**
     * The relay queries to fetch the data
     * Connects to fragments used in the app
     * @returns {Object}
     */
    static get queries () {
        return {
            allMeals: Component => Relay.QL`
          query MealsQueryAll { all { ${Component.getFragment('allMeals')} }}
        `,
            allChefs: Component => Relay.QL`
          query ChefsQueryAll { allChefs { ${Component.getFragment('allChefs')} }}
        `,
        };
    }

    /**
     * The route name (meal in this case)
     * @returns {String}
     */
    static get routeName () {
        return 'meal';
    }
}

export default MealsRoute;
