import Relay from 'react-relay';

/**
 * Relay data connector
 * Takes fragments from Data collections with a Graph QL query
 *
 * It gets all chefs and all meals data from the server and connects
 * it to component
 *
 * @param {React.Component} component
 */
function connect (component) {
    return Relay.createContainer(component, {
        fragments: {
            allMeals: () => Relay.QL`
                fragment on MealsCollection {
                    meals { id, title, picture },
                    count
                }
            `,
            allChefs: () => Relay.QL`
                fragment on ChefsCollection {
                    chefs { id, firstName, lastName, avatar },
                    count
                }
            `,
        },
    });
}

export default connect;
