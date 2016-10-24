import ACTION_TYPES from '../config/memory-actions';

/**
 * Unlock a match in memory
 * @param {String} chefId
 */
function unlockMatch (chefId) {
    return {
        type: ACTION_TYPES.UNLOCK_MATCH,
        chefId
    };
}

export {
    unlockMatch
};
