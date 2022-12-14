import { HashLink } from 'react-router-hash-link';
import "./footer.scss";
import { Link } from 'react-router-dom';
import at from './at.png';
import phone from './phone.png';


const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

const Footer = () => {
    return (
        <>
            <footer>

                    <div className="footer-column">
                        

                    <div className="column">
                        <div className='inner-cintainer'>
                        <h4>FIRMA REMONTOWA</h4>
                                <div className="contact-link">
                                    <img src={phone}/>
                                    <Callto phone="+48888868130">888 868 130</Callto>                            
                                </div>

                                <div className="contact-link">
                                    <img src={at}/>
                                    <Mailto email="maciektrebunia@gmail.com" subject="Hello & Welcome" body="Hello world!">
                                        maciektrebunia@gmail.com
                                    </Mailto>                                                     
                                </div>
                        </div>
                    </div>          

                    <div className="column">
                    <div className='inner-cintainer'>
                        <h4>OFERTA</h4>

                        <Link className="off-link" to="UrgentRepairs">                        
                            NAPRAWY PILNE                                      
                        </Link>

                        <Link className="off-link" to="ElectricalModifications">                      
                            PRZER??BKI ELEKTRYCZNE                                      
                        </Link> 

                        <Link className="off-link" to="HydraulicModifications">
                            PRZER??BKI HYDRAULICZNE                                      
                        </Link> 

                        <Link className="off-link" to="Exchange">
                            WYMIANY                                      
                        </Link> 

                        <Link className="off-link" to="Bathrooms">   
                            ??AZIENKI                                     
                        </Link> 

                        <Link to="InteriorFinishing" className="off-link">
                            REMONTY I WYKO??CZENIA                                     
                        </Link> 
          
                        </div>
                    </div>

                    <div className="column">
                    <div className='inner-cintainer'>
                        <h4>POZNAJ NASZ?? FIRM??</h4>

                        <HashLink className="off-link" smooth to="/#abaut">O NAS</HashLink>
                        <HashLink className="off-link"  smooth to="/#offert">OFERTA</HashLink>
                        
                        <Link className="off-link" to="Realization">
                            REALIZACJE                                     
                        </Link> 

                        <Link className="off-link" to="Contact">
                            KONTAKT                                     
                        </Link> 
                    </div>
                </div>
                </div>

            </footer>            
        </>
    )
}

export default Footer