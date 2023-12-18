import s from './card.module.css';
import ArrowImg from '../../img/cards/Arrow.svg';

const Card = ({title, img, alt}) => {
    return ( 
        <div className={s.card}>
                <a className={s.card__link} href="#!"></a>
                <img className={s.card__img} src={img} alt={alt} />
                <div className={s.card__body}>
                    <div className={s.card__header}>
                        <h3 className={s.card__title-3}>
                            {title}
                        </h3>
                        <p>Explore Now!</p>
                    </div>
                    <img className={s.card__arrow} src={ArrowImg} alt="arrow-category" />
                </div>
        </div>
     );
}
 
export default Card;