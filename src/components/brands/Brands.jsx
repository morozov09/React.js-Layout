import BrandsStyles from './brands.css';
import HM from '../../img/companies/HM.png'
import Obey from '../../img/companies/Obey.png'
import Shopify from '../../img/companies/Shopify.png'
import Lacoste from '../../img/companies/Lacoste.png'
import Levis from '../../img/companies/Levis.png'
import Amazon from '../../img/companies/Amazon.png'

const Brands = () => {
    return ( 
        <section className="brands">
            <div className="container">
                <div className="brands__list">

                    <img src={HM} alt="hm" />
                    <img src={Obey} alt="Obey" />
                    <img src={Shopify} alt="Shopify" />
                    <img src={Lacoste} alt="Lacoste" />
                    <img src={Levis} alt="Levis" />
                    <img src={Amazon} alt="Amazon" />

                </div>
            </div>
        </section>
     );
}
 
export default Brands;