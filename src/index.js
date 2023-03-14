/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import "animate.css"

/*
 * Internal dependencies
 */
import "./styles/style.scss"
import form from "./components/form"
import menu from "./components/menu"
import priceSwitch from './components/priceSwitch';

document.addEventListener('DOMContentLoaded', () => {
    form()
    menu()
    priceSwitch();
})