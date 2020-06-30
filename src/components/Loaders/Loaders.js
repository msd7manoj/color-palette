import React from 'react';
import './styles.scss';

const Loader = () => {
    return ( 
        <div className="appLoaderWrp">
            <div className="appLoader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
        
    );
}
    
export default Loader;