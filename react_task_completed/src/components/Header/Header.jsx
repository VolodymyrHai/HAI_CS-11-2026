import './Header.css';

function Header() {
    return (
        <header className='book_store'>
            <img className='book_store_logo' src="/images/logo.png"/>

            <nav>
                <div className='menu'>
                    <span className='color_for_home'>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span>Page 1</span>
                    <span>Page 2</span>
                    <span>Store</span>
                </div>
            </nav>

            <img className='book_store_shopping_cart' src='/images/shopping-cart.svg'/>
        </header>
    )
}
export default Header