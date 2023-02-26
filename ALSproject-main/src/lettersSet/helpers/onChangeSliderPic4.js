import renderSlider4 from "../components/renderSlider4.js";
import setCounter from "./setCounter.js";



const onChangeSliderPic4 = (letters4, counter4, controller) => {
    counter4 = setCounter(letters4, counter4, controller);
    renderSlider4(letters4, counter4);
    return counter4;

}

export default onChangeSliderPic4;