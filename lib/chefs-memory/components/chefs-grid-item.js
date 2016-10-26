import React, { Component } from 'react';
import Button from 'react-native-button';
import { Image } from 'react-native';

import style from '../style/chefs-grid-item';

/**
 * <ChefsGridItem />
 *
 * @property {Number} style
 * @property {String} avatar
 * @property {Boolean} isLocked
 */
class ChefsGridItem extends Component
{
    static get propTypes () {
        return {
            style: React.PropTypes.number,
            avatar: React.PropTypes.string,
            isLocked: React.PropTypes.bool,
            onPress: React.PropTypes.func
        };
    }

      /**
       * Gets the image resource
       * Will be a placeholder in case of locked
       * Will be a chefs face in case of unlocked
       * @returns {Object}
       */
    get imageSource () {
        if (this.props.isLocked === true) {
            return require('../../../assets/mini-logo.png');
        }

        return {
            uri: this.props.avatar
        };
    }

      /**
       * Render the single chef grid item
       * @returns {XML}
       */
    render () {
        return (
          <Button
            style={this.props.style}
            onPress={this.props.onPress}
          >
            <Image
              style={style.image}
              source={this.imageSource}
              resizeMode="cover"
            />
          </Button>
        );
    }

}

export default ChefsGridItem;
