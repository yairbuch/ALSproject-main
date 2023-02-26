import { SLIDER_LETTERS2 } from "../../services/domService.js"


const renderSlider2 = (letters2, num = 0) => {
    if (!letters2.length) return null;
    SLIDER_LETTERS2.innerHTML = letters2[num].chart2;
    SLIDER_LETTERS2.style.color = letters2[num].color2;
    return;
}

export default renderSlider2;


