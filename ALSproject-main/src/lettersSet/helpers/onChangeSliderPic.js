import renderSlider from "../components/renderSlider.js";
import setCounter from "./setCounter.js";

const onChangeSliderPic = (letters, counter, controller) => {
    counter = setCounter(letters, counter, controller);
    renderSlider(letters, counter);
    return counter;

}

export default onChangeSliderPic;