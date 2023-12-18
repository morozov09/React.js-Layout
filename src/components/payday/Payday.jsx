import PaydayWomanImg from '../../img/cards/promo-img.jpg';
import s from './payday.module.css';

const Payday = () => {
    return ( 
        <section className={s.payday__section}>
            <div className="container">
                <div className={s.payday__body}>
                    <img src={PaydayWomanImg} alt="payday" />
                    <div className={s.payday__text}>
                        <div className="promo__text-heading">
                            <span>
                                <span>PAYDAY</span>
                                <br />
                                
                            </span>
                            SALE NOW
                        </div>
                        <div className={s.payday__text_desc}>
                            Spend minimal $100 get 30% off <br />
                            voucher code for your next purchase
                        </div>
                        <div className={s.payday__text_date}>
                            1 June - 10 June 2021
                        </div>
                        <div className={s.payday__text_desc2}>
                            *Terms & Conditions apply
                        </div>
                        <a href='#!' className={s.payday__text_btn}>
                            SHOP NOW
                        </a>
                    </div>
                </div>
                </div>
        </section>
     );
}
 
export default Payday;