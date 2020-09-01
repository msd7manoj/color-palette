import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import globalStyles from '../../../../styles/globalStyle';
import PaletteTabContent from './PaletteTabContent';

const PaletteTab = ({ selectedPalette }) => {
    const [colorTabs, setcolorTabs] = useState([])
    const [colorContent, setColorContent] = useState()
    const classes = useStyles()
    const globalClasses = globalStyles()
    

    const navToTabContent = (ind) => (e) => {
      const colors = colorTabs.filter((el, i) => i === ind )
      setColorContent(colors[0].color)
      setcolorTabs((tabs) => {
        return tabs.map( ( tab, i ) => ({ color: tab.color, active: ind === i }) )
      })
    }

    useEffect(() => {
      setcolorTabs(( tab ) => selectedPalette.palettes.map( ( el, ind ) => {
          return {
            color: el,
            active: ind === 0
          }
        })
      )
      setColorContent(selectedPalette.palettes[0])
    }, [selectedPalette])


    return (
      <>
        <div className={classes.paletteTabWrp}>
          <ul className={clsx(classes.drawerPaletteTab, globalClasses['dFlex'])}>
            { colorTabs.map( ({ color, active }, ind ) => {
              return (
                <li key={color} className={ clsx( active && classes.active) } 
                    style={{ background: `#${color}` }}
                    onClick={ navToTabContent(ind) }>
                  <span>
                    <i className="lni lni-checkmark"></i>
                  </span>
                </li>
              )
            } ) }
          </ul>
        </div>

        <div className={classes.paletteTabContWrp}>
          <div>
            <PaletteTabContent color={colorContent} />
          </div>
        </div>
      </>
    );
}
 
export default PaletteTab;