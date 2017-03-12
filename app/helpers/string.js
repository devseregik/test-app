/**
 * String helpers
 */
export default {

    /**
     * Decline word
     *
     * @method decline
     * @param  {Array}      options Desclines list
     * @param  {Integer}    count   Number
     * @return {String}             Declining string
     */
    decline: (options, count) => {
        let index = count % 100;

        if (index >=11 && index <= 14) {
            index = 0;
        }
        else {
            index = (index %= 10) < 5 ? (index > 2 ? 2 : index): 0;
        }

        return(options[index]);
    }

}
