import renderSlider3 from "../components/renderSlider3.js";
import setCounter from "./setCounter.js";



const onChangeSliderPic3 = (letters3, counter3, controller) => {
    counter3 = setCounter(letters3, counter3, controller);
    renderSlider3(letters3, counter3);
    return counter3;

}

export default onChangeSliderPic3;