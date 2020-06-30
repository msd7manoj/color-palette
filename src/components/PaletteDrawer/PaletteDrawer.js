import React from 'react';
import Drawer from 'rc-drawer'
import "rc-drawer/assets/index.css";
import useStyles from './styles';
import globalStyles from '../../styles/globalStyle'
import IconLink from '../IconLink/IconLink';
import PaletteTab from './components/PaletteTab/PaletteTab';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { extractSelectedPalette } from '../../selectors/paletteStateSelector';
import { extractDrawerState } from '../../selectors/uiStateSelector';
import clsx from 'clsx';
import { closePaletteDrawer } from '../../redux/uiState/action/action';


const PaletteDrawer = ({ drawerOpen, closePaletteDrawer, selectedPalette }) => {

    const classes = useStyles()
    const globalClasses = globalStyles()
    const closeDrawer = () => {
      closePaletteDrawer()
    }



    return ( 
        <Drawer
          showMask={false}
          handler={false}
          parent={null}
          level={null}
          placement="right"
          handleChild={false}
          open={drawerOpen}
          width="380px" >
          <div className={classes.paletteDrawerWrp}>
            <div className={ clsx(globalClasses['dFlex'], classes.paletteDrawerHeader)}>
              <h3>View Palette</h3>
              <IconLink onClick={closeDrawer} tooltip="Export Palette">
                <i className="fas fa-arrow-right"></i>
              </IconLink>
            </div>

            <PaletteTab selectedPalette={selectedPalette} />
            
            <div className={ clsx(globalClasses['dFlex'], classes.paletteNav)}>
              <div className={globalClasses['dFlex']}>
                <IconLink tooltip="Export Palette">
                  <i className="fas fa-file-export"></i>
                </IconLink>
                <IconLink tooltip="Copy All">
                  <i className="far fa-copy"></i>
                </IconLink>
                <IconLink tooltip="Open Palette">
                  <i className="fas fa-palette"></i>
                </IconLink>
              </div>
              <div className={globalClasses['dFlex']}>
                <IconLink tooltip="Previous Palette">
                  <i className="lni lni-chevron-left"></i>
                </IconLink>
                <IconLink tooltip="Next Palette">
                  <i className="lni lni-chevron-right"></i>
                </IconLink>
              </div>
            </div>
          </div>
        </Drawer>
    );
}


const mapStatesToProps = createStructuredSelector({
  drawerOpen: extractDrawerState,
  selectedPalette: extractSelectedPalette
})


const mapDispatchToProps = dispatch => ({
  closePaletteDrawer: () => dispatch(closePaletteDrawer()),
});


export default connect(mapStatesToProps, mapDispatchToProps)(PaletteDrawer);