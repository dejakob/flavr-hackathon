import ROUTES from '../config/routes';

/**
 * Service to use the navigator throughout the entire app
 */
class NavigatorService
{
      /**
       * Initialize the service,
       *  set the navigator that can be used
       * @param {Object} navigator
       */
    static init (navigator) {
        NavigatorService.appNavigator = navigator;
    }

      /**
       * Go to a specific route by its name
       */
    static goTo (routeName) {
        const route = NavigatorService.appNavigator.getCurrentRoutes().filter(routeConfig =>
          routeConfig.key === routeName
        )[0];

        if (route) {
            // Use jumpTo for animated change to other route in stackTrace
            NavigatorService.appNavigator.jumpTo(route);
        }
        else {
            const staticRoute = ROUTES.filter(routeConfig =>
                routeConfig.key === routeName
            )[0];

            NavigatorService.appNavigator.push(staticRoute);
        }
    }
}

export default NavigatorService;
