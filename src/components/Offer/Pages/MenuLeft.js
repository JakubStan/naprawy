import React from "react";
import bathroom from '../icons/bathroom-white.png';
import paintroller from '../icons/paintroller-white.png';
import plumbing from '../icons/plumbing-white.png';
import renovation from '../icons/renovation-white.png';
import repairtols from '../icons/repairtols-white.png';
import tools from '../icons/tools-white.png';
import trowel from '../icons/trowel-white.png'
import wrench from '../icons/wrench-white.png';
import "./pages.scss";
import { Link } from 'react-router-dom';

export function MenuLeft(){
    return (
        <>
    <div className="menu-off">
    <Link className="off-link" to="UrgentRepairs">
        <img src={repairtols}/>
        <h3>NAPRAWY PILNE</h3>                                      
    </Link>

    <Link className="off-link" to="ElectricalModifications">
        <img src={tools}/>
        <h3>PRZERÓBKI ELEKTRYCZNE</h3>                                      
    </Link> 

    <Link className="off-link" to="HydraulicModifications">            
        <img src={wrench}/>
        <h3>PRZERÓBKI HYDRAULICZNE</h3>                                      
    </Link> 

    <Link className="off-link" to="Exchange">            
        <img src={plumbing}/>
        <h3>WYMIANY</h3>                                      
    </Link> 

    <Link className="off-link" to="Bathrooms">           
        <img src={bathroom}/>
        <h3>ŁAZIENKI</h3>                                     
    </Link> 

    <Link to="InteriorFinishing" className="off-link">
        <img src={paintroller}/>
        <h3>WYKOŃCZENIA</h3>                                     
    </Link> 

    <Link className="off-link" to="Renovations">
        <img src={renovation}/>
        <h3>REMONTY</h3>                                      
    </Link>

    <Link className="off-link" to="Filling">
        <img src={trowel}/>
        <h3>SZPACHLOWANIE</h3>                                     
    </Link> 
</div>

</>
    )

}

export default MenuLeft