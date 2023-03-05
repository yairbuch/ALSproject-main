
import writeLetters from "../components/writeLetters.js";
import setCounter from "./setCounter.js";


const onLettersChange = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters(letters, counter);
    return counter;

}

export default onLettersChange;


