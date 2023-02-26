import renderSlider2 from "../components/renderSlider2.js";
import setCounter from "./setCounter.js";



const onChangeSliderPic2 = (letters2, counter2, controller) => {
    counter2 = setCounter(letters2, counter2, controller);
    renderSlider2(letters2, counter2);
    return counter2;

}

export default onChangeSliderPic2;