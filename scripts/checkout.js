import { renderCheckoutHeader } from "./Checkout/checkoutHeader.js";
import { renderOrederSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import {loadCartFetch } from "../data/cart.js";

async function loadPage() {
    try {
        await loadProductsFetch();
        await loadCartFetch();
    } catch (error) {
        console.log('Unexpected error. Please try again later.');
    }

    renderCheckoutHeader();
    renderOrederSummary();
    renderPaymentSummary();
}
loadPage();