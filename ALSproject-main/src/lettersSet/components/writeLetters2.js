import { SENTENCE_FIELD, SLIDER_LETTERS1 } from "../../services/domService.js";


const writeLetters2 = (letters2, num = 0) => {

    if (!letters2.length) return null;
    if (SLIDER_LETTERS1.innerHTML === 'י')
        SENTENCE_FIELD.textContent += letters2[num].chart2;
    if (SLIDER_LETTERS1.innerHTML === 'ל')
        SENTENCE_FIELD.textContent += letters2[num + 1].chart2;
    if (SLIDER_LETTERS1.innerHTML === 'א')
        SENTENCE_FIELD.textContent += letters2[num + 2].chart2;
    if (SLIDER_LETTERS1.innerHTML === 'ע')
        SENTENCE_FIELD.textContent += letters2[num + 3].chart2;
    if (SLIDER_LETTERS1.innerHTML === 'ח')
        SENTENCE_FIELD.textContent += letters2[num + 4].chart2;
    if (SLIDER_LETTERS1.innerHTML === 'צ')
        SENTENCE_FIELD.textContent += letters2[num + 5].chart2;

    return;
}



export default writeLetters2;
