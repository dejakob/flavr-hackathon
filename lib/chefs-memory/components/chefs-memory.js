import React, { Component } from 'react';
import { View } from 'react-native';

import ChefsGrid from './chefs-grid';
import style from '../style/chefs-memory';
import connectMemory from '../connectors/memory-connector';
import ArrayHelper from '../helpers/array-helper';

/**
 * <ChefsMemory />
 *
 * Main component of the memory feature
 * @property {Array.<Object>} chefs
 * @property {Immutable} memory
 * @property {Function} unlockMatch
 */
class ChefsMemory extends Component
{
    static get propTypes () {
        return {
            chefs: React.PropTypes.arrayOf(Object),
            memory: React.PropTypes.instanceOf(Object),
            unlockMatch: React.PropTypes.func
        };
    }

    /**
     * Create new ChefsMemory Component
     */
    constructor () {
        super();

        this.state = {
            chefs: null,
        };
    }

    /**
     * When the component mounts: shuffle the chefs
     */
    componentWillMount () {
        this.state = {
            chefs: ArrayHelper.shuffle(
                [...this.props.chefs, ...this.props.chefs]
            )
        };
    }

    /**
     * Render the ChefsMemory Component
     * @returns {XML}
     */
    render () {
        if (!this.state.chefs) {
            return null;
        }

        return (
          <View
            style={style.memory}
          >
            <ChefsGrid
              cols={4}
              memory={this.props.memory}
              handleUnlockMatch={this.props.unlockMatch}
              values={this.state.chefs}
            />
          </View>
        );
    }
}

export default connectMemory(ChefsMemory);
