import NewsletterStyles from './newsletter.css';

const Newsletter = () => {
    return ( 
        <section className='newsletter__section'>
            <div className="container">
                <div className="newsletter__body">
                    <h5>
                        JOIN SHOPPING COMMUNITY TO <br />
                        GET MONTHLY PROMO
                    </h5>
                    <p>
                        Type your email down below and be young wild generation
                    </p>
                    <form className="newsletter__input_wrapper">
                        <input className='newsletter__input' type="text" placeholder='Add your email here' />
                        <input type="submit" value="Send" className='newsletter__btn' />
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Newsletter;