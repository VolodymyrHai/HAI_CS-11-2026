import './Best_Selling_Book.css'

function Best_Selling_Book() {
    return (
        <section className="flex">
            <div>
                <div className="heading">
                    Over 4000 Amazon Reviews
                </div>
                <div className="best_selling_book">
                    Best <br />
                    selling<br />
                    book
                </div>
                <div className="under_best_selling_book">
                    Our bookstore is a welcoming place for <br /> readers, writers, and curious minds.
                </div>
                <button className="button_view_more">VIEW MORE</button>
            </div>
            <img className="best_selling_book_img" src="/images/two-new-books-wrappers-4.jpg"/>
        </section>
    );
}

export default Best_Selling_Book