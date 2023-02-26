import { SLIDER_LETTERS3 } from "../../services/domService.js"

const renderSlider3 = (letters3, num = 0) => {
    if (!letters3.length) return null;
    SLIDER_LETTERS3.innerHTML = letters3[num].chart3;
    SLIDER_LETTERS3.style.color = letters3[num].color3;
    return;
}

export default renderSlider3;


