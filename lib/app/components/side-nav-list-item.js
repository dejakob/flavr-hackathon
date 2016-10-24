import React, { Component } from 'react';
import Button from 'react-native-button';
import { Text } from 'react-native';

import style from '../style/side-nav-list-item';

/**
 * <SideNavListItem />
 * @property {Object} item
 * @property {Function} onTab
 */
class SideNavListItem extends Component
{
    static get propTypes () {
        return {
            item: React.PropTypes.object,
            onTab: React.PropTypes.func,
        };
    }

    /**
     * The text label of the navigation link
     * @returns {String}
     */
    get label () {
        return this.props.item.label;
    }

    /**
     * Render a single side nav list item
     * @returns {XML}
     */
    render () {
        return (
          <Button
            onPress={this.props.onTab}
          >
            <Text
              style={style.label}
            >
              {this.label.toUpperCase()}
            </Text>
          </Button>
    );
    }
}

export default SideNavListItem;
