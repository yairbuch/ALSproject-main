
import writeLetters2 from "../components/writeLetters2.js";
import setCounter from "./setCounter.js";



const onLettersChange2 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters2(letters, counter);
    return counter;

}

export default onLettersChange2;