import HeaderStyles from './header.css';
import LogoImg from '../../img/header/logo.svg';

function Header () {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__menu">

                    <a className='header__logo' href="#!">
                        <img src={LogoImg} alt="logo" />
                        TrendVista
                    </a>

                    <ul className="header__nav">
                        <li><a href="#!">CATALOGUE</a></li>
                        <li><a href="#!">FASHION</a></li>
                        <li><a href="#!">FAVOURITE</a></li>
                        <li><a href="#!">LIFESTYLE</a></li>
                        <li><a className='header__nav-btn' href="#!">SIGN UP</a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}

export default Header;