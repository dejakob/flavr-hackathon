/**
 * Service to use SideNav throughout the entire app
 */
class SideNavService
{

    /**
     * Initialize the service,
     *  set the navigator that can be used
     * @param {Object} sideNav
     */
    static init (sideNav) {
        SideNavService.appSideNav = sideNav;
    }

    /**
     * Open the sideNav
     */
    static open () {
        SideNavService.appSideNav.openDrawer();
    }

    /**
     * Close the sideNav
     */
    static close () {
        SideNavService.appSideNav.closeDrawer();
    }
}

export default SideNavService;
