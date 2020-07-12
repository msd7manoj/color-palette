import React from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import useStyles from './styles';
import IconLink from '../IconLink/IconLink';
import PaletteColors from './PaletteColors';
import globalStyles from '../../styles/globalStyle';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { palettesSelect } from '../../redux/palettesState/actions/action';
import { openPaletteDrawer } from '../../redux/uiState/action/action';
import { copyText, notification } from '../../utils/utils';
import DropDownMenu, { DropDownItem } from '../DropDownMenu/DropDownMenu';



const Palettes = ({ data, openPaletteDrawer, selectPalette }) => {

    const classes = useStyles()

    const globalClasses = globalStyles()
    
    const history = useHistory();

    const viewPalette = (id) => (e) => {
      openPaletteDrawer()
      selectPalette(id)
    }
    const openPalette = (palettes) => (e) => {
      const paletteSlug = palettes.join('-')
      history.push(`/create-palette/${paletteSlug}`);
    }
    const copyAll = () => {
      notification(`Copied to Clipboard`)
      if(data.palettes.length > 0)
        copyText(data.palettes.join('-'))
    }

    return (
      <div className={classes.paletteWrp}>
        <Row end="md" middle="md" className={globalClasses['mb-xs']}>
          <Col md={12}>
            <div className={globalClasses['dFlexEnd']}>
              {/* <IconLink tooltip="Export Palette"> 
                <i className="fas fa-file-export"></i>
              </IconLink> */}
              <DropDownMenu
                    position={ 'bottom-right' }
                    size={'md'}
                    width={170}
                    iconSize={'1rem'}
                    iconWidth={35}
                    iconHeight={35}
                    iconClass={'fas fa-file-export'}>
                <DropDownItem>
                  <a href="/">Explore As SVG</a>
                </DropDownItem>
                <DropDownItem>
                  <a href="/">Export As PDF</a>
                </DropDownItem>
                <DropDownItem>
                  <a href="/">Export As PDF</a>
                </DropDownItem>
                <DropDownItem>
                  <a href="/">Export As CSS</a>
                </DropDownItem>
                <DropDownItem>
                  <a href="/">Explore As JSON</a>
                </DropDownItem>
              </DropDownMenu>
              <IconLink onClick={copyAll} tooltip="Copy All"> 
                <i className="far fa-copy"></i>
              </IconLink>
              <IconLink onClick={openPalette(data.palettes)} tooltip="Open Palette"> 
                <i className="fas fa-palette"></i>
              </IconLink>
              <IconLink onClick={viewPalette(data._id)} tooltip="View Palette"> 
                <i className="fas fa-swatchbook"></i>
              </IconLink>
            </div>
          </Col>
        </Row>
        <Row className={globalClasses['mb-1']}>
          <Col md={12}>
            <PaletteColors palettes={data.palettes} />
          </Col>
        </Row>
        <Row className={clsx(classes.paletteAction, globalClasses['mb-xs'])} between="md">
          <Col md={3}>
            <IconLink tooltip="Add to Favourites"> 
                <i className="far fa-heart"></i>
            </IconLink>
          </Col>
          <Col md={4} className={globalClasses['dFlexEnd']}>
            <span className={clsx(globalClasses['dFlex'], classes.likePalette)}>
              <IconLink tooltip="Like"> 
                <i className="far fa-thumbs-up"></i>
              </IconLink>
              {data.likes}
            </span>
          </Col>
        </Row>
        <Row center="md">
          <Col md={5}>
            <a href="/" className={classes.createdBy}>
              <i className="fas fa-paint-brush"></i>
              {data.userName}
            </a>
          </Col>
        </Row>

        
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
  openPaletteDrawer: () => dispatch(openPaletteDrawer()),
  selectPalette: (payload) => dispatch(palettesSelect(payload)),
});

export default connect(null, mapDispatchToProps)(Palettes);