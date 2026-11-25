import './Hold_Still.css'

function Hold_Still () {
    return (
        <section className='main_hold_still'>

            <img className='wild_heart' src='/images/book-8.png'/>

            <div>
                <div className='hold_still'>
                    Hold Still
                </div>
                <div className='by_johan'>
                    <b>By Jonah Reeves</b>
                </div>
                <div className="description_hold_still">
                    Through short essays and personal observations, Hold Still invites readers to pause, breathe, and become more present. This thoughtful collection is ideal for anyone looking for calm, clarity, and a more intentional approach to daily life.
                </div>
                <div className='genre_and_price'>
                    <div>
                        <b>Genre:</b> Essays & Reflections
                    </div>
                    <div>
                        <b>Price:</b> $26.00
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hold_Still