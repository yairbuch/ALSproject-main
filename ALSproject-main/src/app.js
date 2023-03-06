
import "./routes/links.js";
import "./lettersSet/helpers/setCounter.js";
import { renderSlider, renderSlider2, renderSlider3, renderSlider4 } from "./lettersSet/components/renderSlider.js";
import { SLIDER_SHIFT_BTN, SENTENCE_FIELD } from "./services/domService.js";
import "./lettersSet/helpers/onChangeSliderPic.js";
import "./lettersSet/helpers/onLettersChange.js";
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


renderSlider(letters, 0);

renderSlider2(letters2, 0);

renderSlider3(letters3, 0);

renderSlider4(letters4, 0);


SLIDER_SHIFT_BTN.onclick = function shift() {

    SENTENCE_FIELD.textContent += ' ';
}

