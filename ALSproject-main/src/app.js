import "./routes/links.js";
import setCounter from "./lettersSet/helpers/setCounter.js";
import renderSlider from "./lettersSet/components/renderSlider.js";
import { SLIDER_NEXT_BTN, SLIDER_PREV_BTN, SLIDER_LETTERS1, SLIDER_LETTERS2, SLIDER_LETTERS3, SLIDER_LETTERS4, SLIDER_SHIFT_BTN, SENTENCE_FIELD } from "./services/domService.js";
import onChangeSliderPic from "./lettersSet/helpers/onChangeSliderPic.js";
import renderSlider2 from "./lettersSet/components/renderSlider2.js";
import onChangeSliderPic2 from "./lettersSet/helpers/onChangeSliderPic2.js";
import renderSlider3 from "./lettersSet/components/renderSlider3.js";
import onChangeSliderPic3 from "./lettersSet/helpers/onChangeSliderPic3.js";
import renderSlider4 from "./lettersSet/components/renderSlider4.js";
import onChangeSliderPic4 from "./lettersSet/helpers/onChangeSliderPic4.js";
import onLettersChange from "./lettersSet/helpers/onLettersChange.js";
import onLettersChange2 from "./lettersSet/helpers/onLettersChange2.js";
import onLettersChange3 from "./lettersSet/helpers/onLettersChange3.js";
import onLettersChange4 from "./lettersSet/helpers/onLettersChange4.js";
import "./users/models/user.js"





window.letters = [
    {
        chart: 'י',
        color1: "red",
    },
    {
        chart: 'ל',
        color1: "red",
    },
    {
        chart: 'א',
        color1: "red",
    },
    {
        chart: 'ע',
        color1: "red",
    },
    {
        chart: 'ח',
        color1: "red",
    },
    {
        chart: 'צ',
        color1: "red",
    },

];


window.letters2 = [
    {

        chart2: 'ה',
        color2: "gold",
    },
    {

        chart2: 'ת',
        color2: "gold",
    },
    {

        chart2: 'ש',
        color2: "gold",
    },
    {

        chart2: 'ק',
        color2: "gold",
    },
    {

        chart2: 'כ',
        color2: "gold",
    },
    {

        chart2: 'ז',
        color2: "blue",
    },

];



window.letters3 = [
    {

        chart3: 'ר',
        color3: "green",
    },
    {

        chart3: 'ב',
        color3: "green",
    },
    {

        chart3: 'נ',
        color3: "green",
    },
    {

        chart3: 'פ',
        color3: "green",
    },
    {

        chart3: 'ט',
        color3: "green",
    },
    {

        chart3: '',
        color3: "green",
    },

];


window.letters4 = [
    {

        chart4: 'ו',
        color4: "blue",
    },
    {

        chart4: 'מ',
        color4: "blue",
    },
    {

        chart4: 'ד',
        color4: "blue",
    },
    {

        chart4: 'ס',
        color4: "blue",
    },
    {

        chart4: 'ג',
        color4: "blue",
    },
    {

        chart4: '',
        color4: "blue",
    },

];



let counter = setCounter(letters, 0);
renderSlider(letters, 0);


let counter2 = setCounter(letters2, 0);
renderSlider2(letters2, 0);


let counter3 = setCounter(letters3, 0);
renderSlider3(letters3, 0);


let counter4 = setCounter(letters4, 0);
renderSlider4(letters4, 0);

let counter5 = setCounter(letters, 0);

let counter6 = setCounter(letters2, 0);

let counter7 = setCounter(letters3, 0);

let counter8 = setCounter(letters4, 0);





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


SLIDER_LETTERS1.addEventListener(
    "click",
    () => (counter5 = onLettersChange(letters, counter5))
);


SLIDER_LETTERS2.addEventListener(
    "click",
    () => (counter6 = onLettersChange2(letters2, counter6))
);


SLIDER_LETTERS3.addEventListener(
    "click",
    () => (counter7 = onLettersChange3(letters3, counter7))
);


SLIDER_LETTERS4.addEventListener(
    "click",
    () => (counter8 = onLettersChange4(letters4, counter8))
);

SLIDER_SHIFT_BTN.onclick = function shift() {

    SENTENCE_FIELD.textContent += ' ';
}
