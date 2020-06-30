import React from 'react'
import { Row, Col } from 'react-flexbox-grid';
import globalStyles from '../../styles/globalStyle';


const SectionTitle = ({ title }) => {

    const globalClasses = globalStyles()
    
    return (
        <Row middle="md" className={globalClasses["mb-2"]} center="md">
             <Col md={12}>
                 <h1>{title}</h1>
            </Col>
         </Row>
    );
}
 
export default SectionTitle;