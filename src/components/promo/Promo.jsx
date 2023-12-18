import PromoStyles from './promo.css';
import PromoImg from '../../img/header/header-img.jpg'
import YellowImg from '../../img/header/list.svg'

function Promo () {
    return (
        <section>
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__text">
                        <div className="promo__text-heading">
                            <span>
                                <span>LET’S</span>
                            </span>
                            <br />
                            EXPLORE 
                            <br />
                            <span>
                                <span className='yellow-mark'>UNIQUE</span>
                            </span>
                            <br />
                            CLOTHES. 
                            <br />
                        </div>
                        <div className="promo__text-descr">
                            Live for Influential and Innovative fashion!
                        </div>
                        <div className="promo__text-btn">
                            <img src={YellowImg} alt="decor" />
                            <a href="#!">Shop Now</a>
                        </div>
                    </div>
                    <img className='promo-img' src={PromoImg} alt="Woman" />
                </div>
            </div>
        </section>
    )
}

export default Promo;