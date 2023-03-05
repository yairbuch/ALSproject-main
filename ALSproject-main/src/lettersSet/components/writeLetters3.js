import { SENTENCE_FIELD, SLIDER_LETTERS2 } from "../../services/domService.js";


const writeLetters3 = (letters3, num = 0) => {

    if (!letters3.length) return null;
    if (SLIDER_LETTERS2.innerHTML === 'ה')
        SENTENCE_FIELD.textContent += letters3[num].chart3;
    if (SLIDER_LETTERS2.innerHTML === 'ת')
        SENTENCE_FIELD.textContent += letters3[num + 1].chart3;
    if (SLIDER_LETTERS2.innerHTML === 'ש')
        SENTENCE_FIELD.textContent += letters3[num + 2].chart3;
    if (SLIDER_LETTERS2.innerHTML === 'ק')
        SENTENCE_FIELD.textContent += letters3[num + 3].chart3;
    if (SLIDER_LETTERS2.innerHTML === 'כ')
        SENTENCE_FIELD.textContent += letters3[num + 4].chart3;
    if (SLIDER_LETTERS2.innerHTML === 'ז')
        SENTENCE_FIELD.textContent += letters3[num + 5].chart3;

    return;
}



export default writeLetters3;
