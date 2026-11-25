import './Book_Collection.css';

function Book_Collection () {
    return (
        <section className='section_book_collection'>
            <div className='book_collection'>
                Book Collection
            </div>
            <div className='my_books'>
                My Books
            </div>
            <div className='grid_books'>
                <div className='grid_column'>
                    <img className='img_books' src="/images/book-1.png"/>
                    <div className='book_name'>
                        Quiet Bloom
                    </div>
                    <div>
                        <span className='crossed_price'>$50.00</span> <span className='current_price'>$24.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>

                <div className='grid_column'>
                    <img className='img_books' src="/images/book-2.png"/>
                    <div className='book_name'>
                        Sea of Light
                    </div>
                    <div>
                        <span className='crossed_price'>$20.00</span> <span className='current_price'>$17.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>

                <div className='grid_column'>
                    <img className='img_books' src="/images/book-3.png"/>
                    <div className='book_name'>
                        Golden Silence
                    </div>
                    <div>
                        <span className='crossed_price'>$23.00</span> <span className='current_price'>$12.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>

                <div className='grid_column'>
                    <img className='img_books' src="/images/book-4.png"/>
                    <div className='book_name'>
                        House of Ferns
                    </div>
                    <div>
                        <span className='crossed_price'>$25.00</span> <span className='current_price'>$19.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>

                <div className='grid_column'>
                    <img className='img_books' src="/images/book-5.png"/>
                    <div className='book_name'>
                        Soft Horizons
                    </div>
                    <div>
                        <span className='crossed_price'>$25.00</span> <span className='current_price'>$20.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>

                <div className='grid_column'>
                    <img className='img_books' src="/images/book-6.png"/>
                    <div className='book_name'>
                        Morning Glass
                    </div>
                    <div>
                        <span className='crossed_price'>$10.00</span> <span className='current_price'>$7.00</span>
                    </div>
                    <button className='button_collection'>Add to cart</button>
                </div>
            </div>
        </section>
    );
}

export default Book_Collection