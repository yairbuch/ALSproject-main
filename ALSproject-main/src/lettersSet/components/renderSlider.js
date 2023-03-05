import { SLIDER_LETTERS1 } from "../../services/domService.js"


const renderSlider = (letters, num = 0) => {
    if (!letters.length) return null;
    SLIDER_LETTERS1.innerHTML = letters[num].chart;
    SLIDER_LETTERS1.style.color = letters[num].color1;
    return;
}


export default renderSlider;





