
import writeLetters3 from "../components/writeLetters3.js";
import setCounter from "./setCounter.js";



const onLettersChange3 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters3(letters, counter);
    return counter;

}

export default onLettersChange3;