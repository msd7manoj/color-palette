import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Row, Col } from 'react-flexbox-grid';
import globalStyles from '../../styles/globalStyle';
import { COLOR_NAMES_VAL } from '../../colorConverter/constants';
import  tinycolor  from 'tinycolor2';

const SolidColors = () => {

    const globalClasses = globalStyles()

    useEffect(() => {
        
        
    }, [])

    return ( 
        <>
            <SectionTitle title={"Solid Colors"} />
            <Row center="md">
                <Col md={12}>
                    <ul className="dFlex solidColorLists">
                        { COLOR_NAMES_VAL.map( (color) => {
                            return (
                                <li>
                                    <div style={ {'backgroundColor': color.hex } }></div>
                                </li>
                            )
                        } ) }
                    </ul>
                </Col>
            </Row>
        </>
    );
}
 
export default SolidColors;