import "../styles/style.css";
import { gunpla } from './gundam';
import { DOMSelectors } from "./dom";
import { insert, sortpricelowhigh, sortpricehighlow,  } from "./filt";

insert(gunpla);

DOMSelectors.clear.addEventListener("click", function(){
    insert(gunpla);
})

DOMSelectors.sortbylow.addEventListener("click", function() {
    sortpricelowhigh(gunpla);
})

DOMSelectors.sortbyhigh.addEventListener("click", function() {
    sortpricehighlow(gunpla);
})