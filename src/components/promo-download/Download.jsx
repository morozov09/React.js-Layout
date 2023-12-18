import DownloadStyle from './download.css'
import DownloadImg from '../../img/cards/vouchers-img.png'
import DownloadImg01 from '../../img/socials/app-store.png'
import DownloadImg02 from '../../img/socials/google-play.png'

const Download = () => {
    return ( 
        <section className='download__section'>
            <div className="container">
                <div className="download__body">
                    <div className="download__text">
                        <h4>
                            DOWNLOAD APP & <br />
                            GET THE VOUCHER!
                        </h4>
                        <p> 
                            Get 30% off for first transaction using <br />
                            Rondovision mobile app for now.
                        </p>
                        <div className="download__btns">
                           <a href="#!">
                                <img src={DownloadImg01} alt="App store" />
                           </a>
                           <a href="#!">
                                <img src={DownloadImg02} alt="Google play" />
                           </a>
                        </div>
                    </div>
                    <img src={DownloadImg} alt="Vaucher" />
                </div>
            </div>
        </section>
     );
}
 
export default Download;