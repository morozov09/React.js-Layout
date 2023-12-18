import s from './favourtite.module.css';
import Card from '../card/Card';
import FavouriteImg01 from '../../img/cards/young-1.jpg';
import FavouriteImg02 from '../../img/cards/young-2.jpg';

const Favourite = () => {
    return ( 
        <section className={s.favourite__section}>
            <div className="container">
                <h2 className="arrivals__head">Young’s Favourite</h2>
                <div className={s.favourite__cards}>
                    <Card title="Trending on instagram" img={FavouriteImg01} alt="Trending on instagram"/>
                    <Card title="All Under $40" img={FavouriteImg02} alt="All Under $40"/>
                </div>
            </div>
        </section>
     );
}
 
export default Favourite;