import updateBookList from "./book-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
    return {
        booklist: updateBookList(state, action),
        shopingCart: updateShoppingCart(state, action)
    }
};

export default reducer;