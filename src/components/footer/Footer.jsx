import FooterStyles from './footer.css';
import SocialImg01 from '../../img/socials/fb.svg'
import SocialImg02 from '../../img/socials/inst.svg'
import SocialImg03 from '../../img/socials/tw.svg'
import SocialImg04 from '../../img/socials/in.svg'


const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="container">
                <div className="footer__body">
                    <div className="footer__info">
                        <div className="footer__header">
                            TrendVista
                        </div>
                        <div className="footer__desc">
                            Complete your style with awesome <br />
                            clothes from us.
                        </div>
                        <div className="footer__socials">
                            <a href="#!"><img src={SocialImg01} alt="Facebook" /></a>
                            <a href="#!"><img src={SocialImg02} alt="Inst" /></a>
                            <a href="#!"><img src={SocialImg03} alt="Twitter" /></a>
                            <a href="#!"><img src={SocialImg04} alt="In" /></a>
                        </div>
                    </div>

                    <div className="footer__lists">
                        <ul>
                            <li><a href="#!">Company</a></li>
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Contact us</a></li>
                            <li><a href="#!">Support</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>

                        <ul>
                            <li><a href="#!">Quick Link</a></li>
                            <li><a href="#!">Share Location</a></li>
                            <li><a href="#!">Orders Tracking</a></li>
                            <li><a href="#!">Size Guide</a></li>
                            <li><a href="#!">FAQs</a></li>
                        </ul>

                        <ul>
                            <li><a href="#!">Legal</a></li>
                            <li><a href="#!">Terms & conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;