import React, { Component } from 'react';
import { ListView } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';

import SideNavListItem from './side-nav-list-item';
import NavigatorService from '../services/navigator-service';
import SideNavService from '../services/side-nav-service';
import style from '../style/side-nav';
import ROUTES from '../config/routes';
import { w4s } from '../../styler';

/**
 * <SideNav />
 * The Side Navigation of the application
 * Transcludes children, which will be the router with the scenes
 * @property {React.Children} children
 */
class SideNav extends Component
{
    static get propTypes () {
        return {
            children: React.PropTypes.object,
        };
    }

    /**
     * List items to be shown in the SideNav
     * @returns {Array.<Object>}
     */
    static get navListItems () {
        return ROUTES;
    }

    /**
     * DataSource containing the listItems for the RN ListView
     * @returns {ListView.DataSource}
     */
    static get navListDataSource () {
        const dataSourceOptions = {
            rowHasChanged: (r1, r2) => r1 !== r2,
        };
        const dataSource = new ListView.DataSource(dataSourceOptions);

        return dataSource.cloneWithRows(SideNav.navListItems);
    }

    /**
     * Handle item tab
     * @param {Object} navListItemData
     */
    static handleItemTab (navListItemData) {
        NavigatorService.goTo(navListItemData.key);
        SideNavService.close();
    }

    /**
     * Render the navigation itself
     * @returns {XML}
     */
    static renderNavigation () {
        return (
          <ListView
            contentContainerStyle={style.listView}
            dataSource={SideNav.navListDataSource}
            renderRow={SideNav.renderNavigationListItem}
          />
        );
    }

    /**
     * Render a single list item of the navigation
     * @param {Object} navListItemData
     * @returns {XML}
     */
    static renderNavigationListItem (navListItemData) {
        const onTab = () => SideNav.handleItemTab(navListItemData);

        return (
          <SideNavListItem
            item={navListItemData}
            onTab={onTab}
          />
        );
    }

    /**
     * Render the SideNav/Drawer component
     * @returns {XML}
     */
    render () {
        return (
          <DrawerLayout
            ref={SideNavService.init}
            drawerWidth={w4s(288)}
            drawerPosition={DrawerLayout.positions.Left}
            renderNavigationView={SideNav.renderNavigation}
          >
            {this.props.children}
          </DrawerLayout>
        );
    }
}

export default SideNav;
