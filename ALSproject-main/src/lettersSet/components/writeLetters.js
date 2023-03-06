import { SENTENCE_FIELD, SLIDER_LETTERS2, SLIDER_LETTERS1 } from "../../services/domService.js";

export const writeLetters = (letters, num = 0) => {

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


export const writeLetters2 = (letters2, num = 0) => {

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


export const writeLetters3 = (letters3, num = 0) => {

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



export const writeLetters4 = (letters4, num = 0) => {

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




