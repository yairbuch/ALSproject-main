
import { SLIDER_LETTERS1, SLIDER_LETTERS2, SLIDER_LETTERS3, SLIDER_LETTERS4 } from "../../services/domService.js";
import { writeLetters, writeLetters2, writeLetters3, writeLetters4 } from "../components/writeLetters.js";
import setCounter from "./setCounter.js";



export const onLettersChange = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters(letters, counter);
    return counter;

}

export const onLettersChange2 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters2(letters, counter);
    return counter;

}

export const onLettersChange3 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters3(letters, counter);
    return counter;

}


export const onLettersChange4 = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    writeLetters4(letters, counter);
    return counter;

}


let counter5 = 0;

let counter6 = 0;

let counter7 = 0;

let counter8 = 0;

SLIDER_LETTERS1.addEventListener(
    "click",
    () => (counter5 = onLettersChange(letters, counter5))
);


SLIDER_LETTERS2.addEventListener(
    "click",
    () => (counter6 = onLettersChange2(letters2, counter6))
);


SLIDER_LETTERS3.addEventListener(
    "click",
    () => (counter7 = onLettersChange3(letters3, counter7))
);


SLIDER_LETTERS4.addEventListener(
    "click",
    () => (counter8 = onLettersChange4(letters4, counter8))
);



