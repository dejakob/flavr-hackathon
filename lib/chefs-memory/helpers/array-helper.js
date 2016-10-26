/**
 * Collection of helper methods
 *  used throughout the memory feature
 */
class ArrayHelper {

      /**
       * Pure function that puts items of an array into a random order
       *
       * @source http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
       * @param {Array.<*>} array
       * @returns {Array.<*>}
       */
    static shuffle (array) {
        let currentIndex = array.length;
        let temporaryValue = null;
        let randomIndex = null;
        const resultArray = [...array];

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = resultArray[currentIndex];
            resultArray[currentIndex] = resultArray[randomIndex];
            resultArray[randomIndex] = temporaryValue;
        }

        return resultArray;
    }
}

export default ArrayHelper;
