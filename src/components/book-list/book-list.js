import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";
// import {booksLoaded, booksRequested, booksError} from "../../actions";
import {fetchBooks, bookAddedToCart} from "../../actions";
import {compose} from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import "./book-list.css";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className="book-list">
            {
                books.map(book => {
                    return (
                        <li key={book.id}>
                            <BookListItem 
                                book={book} 
                                onAddedToCart={() => onAddedToCart(book.id)} />
                        </li>
                    )
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {
    static defaultProps = {
        books: []
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;
        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />;
    }
};

const mapStateToProps = state => {
    return {
        books: state.booklist.books,
        loading: state.booklist.loading,
        error: state.booklist.error
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;

    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: id => dispatch(bookAddedToCart(id))
    };
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
