import { SLIDER_LETTERS4 } from "../../services/domService.js"


const renderSlider4 = (letters4, num = 0) => {
    if (!letters4.length) return null;
    SLIDER_LETTERS4.innerHTML = letters4[num].chart4;
    SLIDER_LETTERS4.style.color = letters4[num].color4;
    return;
}



export default renderSlider4;


