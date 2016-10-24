import { RATIO_HEIGHT, RATIO_WIDTH } from '../config/pixel-ratio';

class RatioHelper {

    /**
     * Recalculate a height value that was calculated for an iphone 4s
     * to the approx height value it should be on the current device
     * @param {Number} heightOnIphone4s
     * @returns {Number}
     */
    static resizeHeightBasedOnIphone4sHeight (heightOnIphone4s) {
        return Math.round(heightOnIphone4s * RATIO_HEIGHT);
    }

    /**
     * Recalculate a width value that was calculated for an iphone 4s
     * to the approx width value it should be on the current device
     * @param {Number} widthOnIphone4s
     * @returns {Number}
     */
    static resizeWidthBasedOnIphone4sWidth (widthOnIphone4s) {
        return Math.round(widthOnIphone4s * RATIO_WIDTH);
    }
}

export default RatioHelper;
