import React from 'react';
import { useHistory } from "react-router-dom";
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button';
import useStyles from './styles';
import globalStyles from '../../styles/globalStyle';
import clsx from 'clsx';
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import { DropDownItem } from '../../components/DropDownMenu/DropDownMenu';

const Header = () => {
    
    const classes = useStyles()
    let history = useHistory();


    const { appMenuIcon, dFlex, dFlexEnd } = globalStyles()

    const appMenu = globalStyles()

    const onCreateGradient = (e) => {
      history.push('/create-gradient/6b0c12-1cabc0')
    }


    return (
        <header className={ clsx(dFlex, classes.header) }>
            <Row className={ classes.headerRowWrp } middle="md">
              <Col md={3}>
                <h1 className={classes.logo}>
                  <a href="/">
                    Palettes Hunt
                    {/* Color Vault */}
                  </a>
                </h1>
              </Col>

              <Col md={9}>
                <div className={dFlexEnd}>
                  <div className={dFlex}>
                    {/* <Button text={'Create Palette'} buttonSize={'md'} /> */}
                    <Button onClick={onCreateGradient} text={'Create Gradient'} buttonSize={'md'} />
                    <DropDownMenu
                    className={classes.ddMenu}
                    position={ 'bottom-right' }
                    width={270}
                    iconSize={'1.4rem'}
                    iconWidth={40}
                    iconHeight={40}
                    iconClass={'fas fa-ellipsis-v'}>
                      <DropDownItem>
                        <a onClick={ (e) => { e.preventDefault() } } href="/">Create Palette From Image</a>
                      </DropDownItem>
                      <DropDownItem>
                        <a href="/">Create Gradient</a>
                      </DropDownItem>
                      <DropDownItem>
                        <a href="/">Create Gradient Palette</a>
                      </DropDownItem>
                      <DropDownItem>
                        <a href="/">Explore Gradient Palette</a>
                      </DropDownItem>
                      <DropDownItem>
                        <a href="/">Solid Colors</a>
                      </DropDownItem>
                    </DropDownMenu>
                    <span className={classes.divider}></span>
                    <div className={classes.loginWrap}>
                      <a href="/">
                        Log In
                      </a>
                      <a href="/">
                        Register
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
        </header>
    );
}
 
export default Header;