import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../../components/Button';
import useStyles from './styles';
import globalStyles from '../../styles/globalStyle';


const Header = () => {
    
    const classes = useStyles()

    const { appMenuIcon, dFlex, dFlexEnd } = globalStyles()

    const appMenu = globalStyles()
    console.log('appMenu', appMenu)
    return (
        <header className={classes.header}>
            <Row middle="md">
              <Col md={3}>
                <h1 className={classes.logo}>
                  <a href="/">
                    Palettes Hunt
                  </a>
                </h1>
              </Col>

              <Col md={9}>
                <div className={dFlexEnd}>
                  <div className={dFlex}>
                    <Button text={'Create Palette'} buttonSize={'md'} />
                    <button className={appMenuIcon}>
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
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