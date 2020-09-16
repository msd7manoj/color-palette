import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { Row, Col } from 'react-flexbox-grid';
import GradientCanvas from './components/GradientCanvas';
import GradientSlider from './components/GradientSlider/GradientSlider';
import GradientOptions from './components/GradientOptions';
import GradientCreateButton from './GradientCreateButton';



const GradientCreator = () => {

    return (
        <>
            <SectionTitle title={"Create Gradient"} />
            <Row center="md">
                <Col md={12}>
                    <Row start="md">
                        <Col md={6}>
                            <GradientCanvas />

                            <GradientSlider />
                        </Col>
                        <Col md={6}>
                            <GradientOptions />

                            <GradientCreateButton />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
 
export default GradientCreator;