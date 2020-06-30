import React, { useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PaletteSearch from '../../components/PaletteSearch';
import PaletteFilter from '../../components/PaletteFiter';
import SectionTitle from '../../components/SectionTitle';
import globalStyles from '../../styles/globalStyle';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { extractPaletteLists, extractPaletteLoaded } from '../../selectors/paletteStateSelector';
import { palettesFetchStart } from '../../redux/palettesState/actions/action';
import PaletteLists from '../../components/PaletteLists';

const Home = ({ palettesList, isListLoaded, palettesFetchStart }) => {

    const globalClasses = globalStyles()

    useEffect(() => {
        palettesFetchStart()
    }, [])

    return ( 
        <>
            <SectionTitle title={"Explore Palette"} />
            <Row center="md">
                <Col md={12}>
                    <Row between="md" className={globalClasses["mb-2"]}>
                        <Col md={4}>
                            <PaletteSearch />
                        </Col>
                        <Col md={3}>
                            <PaletteFilter />
                        </Col>
                    </Row>
                </Col>
                <Col md={12}>
                    <PaletteLists 
                    palettesList={palettesList}
                    isListLoaded={isListLoaded}  />
                </Col>
            </Row>

        </>
    );
}

const mapStatesToProps = createStructuredSelector({
    palettesList: extractPaletteLists,
    isListLoaded: extractPaletteLoaded
})


const mapDispatchToProps = dispatch => ({
    palettesFetchStart: () => dispatch(palettesFetchStart()),
});


export default connect(mapStatesToProps, mapDispatchToProps)(Home);