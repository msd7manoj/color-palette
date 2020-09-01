import React, { useEffect } from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Row, Col } from 'react-flexbox-grid';
import globalStyles from '../../styles/globalStyle';
import { SOLID_COLORS } from '../../colorConverter/solidColorsConst';

const SolidColors = () => {

    const globalClasses = globalStyles()

    useEffect(() => {
        // console.log(Object.keys(a).map( ( color ) => {
        //     return {
        //         hex: `#${ color.split(',')[0] }`
        //     }
        // } ) )
    }, [])

    return ( 
        <>
            <SectionTitle title={"Solid Colors"} />
            <Row center="md">
                <Col md={12}>
                    <ul className="dFlex solidColorLists">
                        { SOLID_COLORS.map( (color) => {
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