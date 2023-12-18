import ArrivalsStyles from './arrivals.css';
import Card from '../card/Card';
import CategoryImg01 from '../../img/cards/01.jpg';
import CategoryImg02 from '../../img/cards/02.jpg';
import CategoryImg03 from '../../img/cards/03.jpg';

const Arrivals = () => {
    return ( 
        <section className='arrivals__section'>
            <div className="container">
                <h2 className="arrivals__head">NEW ARRIVALS</h2>

                <div className="card__list">
                    <Card title="Hoodies & Sweetshirt" img={CategoryImg01} alt="Hoodies & Sweetshirt"/>
                    <Card title="Coats & Parkas" img={CategoryImg02} alt="Coats & Parkas"/>
                    <Card title="Tees & T-Shirt" img={CategoryImg03} alt="Tees & T-Shirt"/>
                </div>
            </div>

            

        </section>
     );
}
 
export default Arrivals;