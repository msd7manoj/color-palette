import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Loader from '../Loaders';
import Palettes from '../Palettes';
import clsx from 'clsx';
import globalStyles from '../../styles/globalStyle';
import PaletteDrawer from '../PaletteDrawer/PaletteDrawer';


const PaletteLists = ({ isListLoaded, palettesList}) => {

    const globalClasses = globalStyles()

    return ( 
        <>
            <Row>
                { isListLoaded ? <Loader /> : palettesList.map((el) => {
                    return (
                        <Col key={el.likes} className={ clsx(globalClasses["mb-1"], "animate__animated", "animate__fadeInUp" )} md={3}>
                            { <Palettes data={el} /> }
                        </Col>
                    );
                })}
            </Row>

            <PaletteDrawer />
        </>
    );
}
 
export default PaletteLists;