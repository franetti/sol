import {showResponsiveNav, initObserver, handleSubmit} from './functions.js'
import {hamburger, arrTargetsObserver} from './selectors.js'

(function ready() {
    initObserver(arrTargetsObserver)
    hamburger.addEventListener("click", () => showResponsiveNav());
    form.addEventListener("submit", handleSubmit);
    formIndex.addEventListener("submit", handleSubmit)
})();








