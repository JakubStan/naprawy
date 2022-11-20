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
                        <h4>FIRMA REMONTOWA</h4>

                        <div className="contact-link">
                            <img src={phone}/>
                            <Callto phone="+48888868130"><h3>888 868 130</h3></Callto>                            
                        </div>

                        <div className="contact-link">
                            <img src={at}/>
                            <Mailto email="maciektrebunia@gmail.com" subject="Hello & Welcome" body="Hello world!">
                                <h3>maciektrebunia@gmail.com</h3>
                            </Mailto>                                                     
                        </div>

                    </div>          

                    <div className="column">
                        <h4>OFERTA</h4>

                        <Link className="off-link" to="UrgentRepairs">                        
                            <h3>NAPRAWY PILNE</h3>                                      
                        </Link>

                        <Link className="off-link" to="ElectricalModifications">                      
                            <h3>PRZERÓBKI ELEKTRYCZNE</h3>                                      
                        </Link> 

                        <Link className="off-link" to="HydraulicModifications">
                            <h3>PRZERÓBKI HYDRAULICZNE</h3>                                      
                        </Link> 

                        <Link className="off-link" to="Exchange">
                            <h3>WYMIANY</h3>                                      
                        </Link> 

                        <Link className="off-link" to="Bathrooms">   
                            <h3>ŁAZIENKI</h3>                                     
                        </Link> 

                        <Link to="InteriorFinishing" className="off-link">
                            <h3>REMONTY I WYKOŃCZENIA</h3>                                     
                        </Link> 
          

                    </div>

                    <div className="column">
                        <h4>O FIRMIE</h4>

                        <HashLink className="off-link" smooth to="/#abaut"><h3>O NAS</h3></HashLink>
                        <HashLink className="off-link"  smooth to="/#offert"><h3>OFERTA</h3></HashLink>
                        
                        <Link className="off-link" to="Realization">
                            <h3>REALIZACJE</h3>                                     
                        </Link> 

                        <Link className="off-link" to="Contact">
                            <h3>KONTAKT</h3>                                     
                        </Link> 
                    </div>

                </div>

            </footer>            
        </>
    )
}

export default Footer