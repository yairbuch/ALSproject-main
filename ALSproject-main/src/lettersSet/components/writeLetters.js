import { SENTENCE_FIELD, SLIDER_LETTERS2 } from "../../services/domService.js";



const writeLetters = (letters, num = 0) => {

    if (!letters.length) return null;
    if (SLIDER_LETTERS2.innerHTML === 'ה')
        SENTENCE_FIELD.textContent += letters[num].chart;
    if (SLIDER_LETTERS2.innerHTML === 'ת')
        SENTENCE_FIELD.textContent += letters[num + 1].chart;
    if (SLIDER_LETTERS2.innerHTML === 'ש')
        SENTENCE_FIELD.textContent += letters[num + 2].chart;
    if (SLIDER_LETTERS2.innerHTML === 'ק')
        SENTENCE_FIELD.textContent += letters[num + 3].chart;
    if (SLIDER_LETTERS2.innerHTML === 'כ')
        SENTENCE_FIELD.textContent += letters[num + 4].chart;
    if (SLIDER_LETTERS2.innerHTML === 'ז')
        SENTENCE_FIELD.textContent += letters[num + 5].chart;

    return;
}




export default writeLetters;
