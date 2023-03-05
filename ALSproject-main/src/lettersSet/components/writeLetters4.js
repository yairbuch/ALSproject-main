import { SENTENCE_FIELD, SLIDER_LETTERS2 } from "../../services/domService.js";


const writeLetters4 = (letters4, num = 0) => {

    if (!letters4.length) return null;
    if (SLIDER_LETTERS2.innerHTML === 'ה')
        SENTENCE_FIELD.textContent += letters4[num].chart4;
    if (SLIDER_LETTERS2.innerHTML === 'ת')
        SENTENCE_FIELD.textContent += letters4[num + 1].chart4;
    if (SLIDER_LETTERS2.innerHTML === 'ש')
        SENTENCE_FIELD.textContent += letters4[num + 2].chart4;
    if (SLIDER_LETTERS2.innerHTML === 'ק')
        SENTENCE_FIELD.textContent += letters4[num + 3].chart4;
    if (SLIDER_LETTERS2.innerHTML === 'כ')
        SENTENCE_FIELD.textContent += letters4[num + 4].chart4;
    if (SLIDER_LETTERS2.innerHTML === 'ז')
        SENTENCE_FIELD.textContent += letters4[num + 5].chart4;

    return;
}



export default writeLetters4;
