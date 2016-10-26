import React, { Component } from 'react';
import { View } from 'react-native';

import style from '../style/chefs-grid';
import ChefsGridItem from './chefs-grid-item';

/**
 * <ChefsGrid />
 *
 * The grid of chefs
 *
 * @property {Number} cols
 * @property {Array.<Object>} values
 * @property {Immutable} memory
 * @property {Function} handleUnlockMatch
 */
class ChefsGrid extends Component
{
    static get propTypes () {
        return {
            cols: React.PropTypes.number,
            values: React.PropTypes.arrayOf(Object),
            memory: React.PropTypes.object,
            handleUnlockMatch: React.PropTypes.func,
        };
    }

    /**
     * Create a new ChefsGrid instance
     */
    constructor () {
        super();

        this.state = {
            temporaryUnlocked: {
                chefId: null,
                rowIndex: null,
                colIndex: null,
            },
        };

        this.handleItemPress = this.handleItemPress.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderColumn = this.renderColumn.bind(this);
    }

    /**
     * Get the amount of columns from the props
     * @returns {Number}
     */
    get cols () {
        return this.props.cols;
    }

    /**
     * Get the values / chef data from the props
     * @returns {Object}
     */
    get values () {
        return this.props.values;
    }

    /**
     * Get a collection of chef's faces that are unlocked
     * @returns {Object}
     */
    get unlockedFaces () {
        return this.props.memory.get('unlockedFaces');
    }

    /**
     * Get the data structured as a grid
     * @returns {Array.<Array>}
     */
    get grid () {
        const { length } = this.values;
        const { cols } = this;

        const grid = [];

        for (let i = 0; i < length; i += cols) {
            const row = [];

            for (let j = 0; j < cols; j += 1) {
                row.push(this.values[i + j]);
            }

            grid.push(row);
        }

        return grid;
    }

    /**
     * Checks if a chef's face is unlocked/shown right now
     * @param {String} chefId
     * @param {Number} rowIndex
     * @param {Number} colIndex
     * @returns {Boolean}
     */
    isFaceUnlocked (chefId, rowIndex, colIndex) {
        if (!this.unlockedFaces) {
            return false;
        }

        const temporaryUnlocked = this.state.temporaryUnlocked.rowIndex === rowIndex &&
        this.state.temporaryUnlocked.colIndex === colIndex;
        const unlocked = this.unlockedFaces.includes(chefId);

        return temporaryUnlocked || unlocked;
    }

    /**
     * Handle when a single item gets tapped
     * @param {Object} chef
     * @param {Number} rowIndex
     * @param {Number} colIndex
     */
    handleItemPress (chef, rowIndex, colIndex) {
        const isSameChef = chef.id === this.state.temporaryUnlocked.chefId;
        const isSamePosition = (
          rowIndex === this.state.temporaryUnlocked.rowIndex &&
          colIndex === this.state.temporaryUnlocked.colIndex
        );

        // When you found the second chef,
        //  trigger 'unlock match'
        if (isSameChef && !isSamePosition) {
            this.props.handleUnlockMatch(chef.id);
        }

        // In other cases, temporary unlock the chef
        else {
            this.setState({
                temporaryUnlocked: {
                    chefId: chef.id,
                    rowIndex,
                    colIndex,
                },
            });
        }
    }


    /**
     * Render a row in the grid
     * @param {Object} row
     * @param {Number} rowIndex
     * @returns {XML}
     */
    renderRow (row, rowIndex) {
        return (
          <View
            style={style.row}
            key={rowIndex}
          >
            {row.map((column, columnIndex) => this.renderColumn(column, columnIndex, rowIndex))}
          </View>
        );
    }

    /**
     * Render a column in a row,
     *  so basically render a single item
     * @param {Object} column
     * @param {Number} columnIndex
     * @param {Number} rowIndex
     * @returns {XML}
     */
    renderColumn (column, columnIndex, rowIndex) {
        return (
          <ChefsGridItem
            style={style.col}
            key={columnIndex}
            isLocked={!this.isFaceUnlocked(column.id, rowIndex, columnIndex)}
            onPress={() => this.handleItemPress(column, rowIndex, columnIndex)}
            avatar={column.avatar}
          />
        );
    }

    /**
     * Render the entire chefs grid
     * @returns {XML}
     */
    render () {
        const { grid } = this;

        return (
          <View
            style={style.grid}
          >
            {grid.map(this.renderRow)}
          </View>
        );
    }
}

export default ChefsGrid;
