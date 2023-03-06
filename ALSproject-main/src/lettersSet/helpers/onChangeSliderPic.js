// import renderSlider from "../components/renderSlider.js";
// import setCounter from "./setCounter.js";

// const onChangeSliderPic = (letters, counter, controller) => {
//     counter = setCounter(letters, counter, controller);
//     renderSlider(letters, counter);
//     return counter;

// }

// export default onChangeSliderPic;

import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN } from "../../services/domService.js";
import { renderSlider, renderSlider2, renderSlider3, renderSlider4 } from "../components/renderSlider.js";
import setCounter from "./setCounter.js";


export const onChangeSliderPic = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    renderSlider(letters, counter);
    return counter;

}

export const onChangeSliderPic2 = (letters2, counter2, controller) => {
    counter2 = setCounter(letters2, counter2, controller);
    renderSlider2(letters2, counter2);
    return counter2;

}


export const onChangeSliderPic3 = (letters3, counter3, controller) => {
    counter3 = setCounter(letters3, counter3, controller);
    renderSlider3(letters3, counter3);
    return counter3;

}


export const onChangeSliderPic4 = (letters4, counter4, controller) => {
    counter4 = setCounter(letters4, counter4, controller);
    renderSlider4(letters4, counter4);
    return counter4;

}


let counter = 0;

let counter2 = 0;

let counter3 = 0;

let counter4 = 0;


SLIDER_NEXT_BTN.addEventListener(
    "click",
    () => (counter = onChangeSliderPic(letters, counter, "next"))
);
SLIDER_PREV_BTN.addEventListener(
    "click",
    () => (counter = onChangeSliderPic(letters, counter, "prev"))
);


SLIDER_NEXT_BTN.addEventListener(
    "click",
    () => (counter2 = onChangeSliderPic2(letters2, counter2, "next"))
);
SLIDER_PREV_BTN.addEventListener(
    "click",
    () => (counter2 = onChangeSliderPic2(letters2, counter2, "prev"))
);



SLIDER_NEXT_BTN.addEventListener(
    "click",
    () => (counter3 = onChangeSliderPic3(letters3, counter3, "next"))
);
SLIDER_PREV_BTN.addEventListener(
    "click",
    () => (counter3 = onChangeSliderPic3(letters3, counter3, "prev"))
);



SLIDER_NEXT_BTN.addEventListener(
    "click",
    () => (counter4 = onChangeSliderPic4(letters4, counter4, "next"))
);
SLIDER_PREV_BTN.addEventListener(
    "click",
    () => (counter4 = onChangeSliderPic4(letters4, counter4, "prev"))
);


