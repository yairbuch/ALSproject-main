
import writeLetters4 from "../components/writeLetters4.js";
import setCounter from "./setCounter.js";



const onLettersChange4 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters4(letters, counter);
    return counter;

}

export default onLettersChange4;