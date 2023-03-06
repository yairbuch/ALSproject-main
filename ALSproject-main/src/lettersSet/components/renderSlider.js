import { SLIDER_LETTERS1, SLIDER_LETTERS2, SLIDER_LETTERS3, SLIDER_LETTERS4 } from "../../services/domService.js"

export const renderSlider = (letters, num = 0) => {
    if (!letters.length) return null;
    SLIDER_LETTERS1.innerHTML = letters[num].chart;
    SLIDER_LETTERS1.style.color = letters[num].color1;
    return;
}


export const renderSlider2 = (letters2, num = 0) => {
    if (!letters2.length) return null;
    SLIDER_LETTERS2.innerHTML = letters2[num].chart2;
    SLIDER_LETTERS2.style.color = letters2[num].color2;
    return;
}

export const renderSlider3 = (letters3, num = 0) => {
    if (!letters3.length) return null;
    SLIDER_LETTERS3.innerHTML = letters3[num].chart3;
    SLIDER_LETTERS3.style.color = letters3[num].color3;
    return;
}

export const renderSlider4 = (letters4, num = 0) => {
    if (!letters4.length) return null;
    SLIDER_LETTERS4.innerHTML = letters4[num].chart4;
    SLIDER_LETTERS4.style.color = letters4[num].color4;
    return;
}
















