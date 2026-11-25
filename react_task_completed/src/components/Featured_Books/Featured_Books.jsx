import './Featured_Books.css'

function Featured_Books () {
    return (
        <section className='main_featured_books'>

            <div>
                <div className='featured_books'>
                    Featured Books for <br />
                    Thoughtful Living
                </div>
                <div className="description_featured_books">
                    Discover a carefully selected collection of inspiring books about personal growth, creativity, nature, and the quiet moments that shape everyday life. Each title combines thoughtful writing with elegant botanical design, making these books meaningful reads and beautiful additions to any home library.
                </div>
                <div className='the_quiet_season'>
                    The Quiet Season
                </div>
                <div className='by_maya'>
                    <b>By Maya Ellison</b>
                </div>
            </div>

            <img className='simple_grace' src='/images/book-7.png'/>
        </section>
    );
}

export default Featured_Books