import React, { useState, useEffect } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PALETTE_COLORS } from './constants/palettesColor';
import Drawer from 'rc-drawer'
import "rc-drawer/assets/index.css";

function App() {

  const [state, setstate] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)




  const toggleDrawer = (e) => {
    e.preventDefault()
    setDrawerOpen(true)
  }


  useEffect(() => {
    setstate(() => {
      return PALETTE_COLORS.map( (el, ind) => {
        return {
          userName: 'msd7manoj',
          palettes: el,
          likes: ind + 1,
          favourites: ind % 4 === 0
        }
      })
    })
    
  }, [])
  return (
    <div>
      <Row>
        <Col xs={12} md={12}>
          <header>
            <Row middle="md">
              <Col md={3}>
                <h1 className="logo">
                  <a href="/">
                    {/* Palette */}
                    Palettes Hunt
                  </a>
                </h1>
              </Col>

              <Col md={9}>
                <div className="dFlex justify-end">
                  <div className="dFlex">
                    <button className="appButton appButton-md">
                      Create Palette
                    </button>
                    <a className="appMenuIcon" href="/">
                      {/* <i class="fas fa-bars"></i> */}
                      <i class="fas fa-ellipsis-v"></i>
                      {/* <i class="lni lni-menu"></i> */}
                    </a>
                    <span className="divider"></span>
                    <div className="loginWrap">
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
        </Col>
      </Row>

      <div className="mainLayout">
        <Row middle="md" className="mb-2" center="md">
          <Col md={12}>
            <h1>Explore Palettes</h1>
          </Col>
        </Row>
          
        <Row center="md">
          <Col md={12}>
            <Row between="md" className="mb-2">
              <Col md={4}>
                <div className="colorSearchInput">
                  <input placeholder="Search Colors (Hex Codes or Color Name)" type="text" />
                  <span>
                    <i className="fas fa-search"></i>
                  </span>
                </div>
              </Col>
              <Col md={3}>
                <div className="dFlex justify-end paletteSelect">
                  <select>
                    <option>Trending</option>
                    <option>Popular</option>
                    <option>Latest</option>
                  </select>
                </div>
              </Col>
            </Row>
          </Col>

          { state.map( el => {
              return (
                <Col key={el.likes} className="mb-1" md={3}>
                  <div className="paletteWrp">
                    <Row end="md" middle="md" className="mb-xs">
                      <Col md={12}>
                        <div className="dFlex justify-end">
                          <a title="Export Palette" className="iconLink" href="/">
                            <i class="fas fa-file-export"></i>
                          </a>
                          <a title="Copy All" className="iconLink" href="/">
                            <i class="far fa-copy"></i>
                          </a>
                          <a title="Open Palette" className="iconLink" href="/">
                            <i class="fas fa-palette"></i>
                          </a>
                          <a title="View Palette" onClick={toggleDrawer} className="iconLink" href="/">
                            <i class="fas fa-swatchbook"></i>
                          </a>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mb-1">
                      <Col md={12}>
                        <ul className="paletteList">
                          {el.palettes.map( palette => {
                            return (
                              <li key={palette} style={{background: `#${palette}`}}>
                                <span className="colorToolTip">{palette}</span>
                              </li>
                            )
                          })} 
                        </ul>
                      </Col>
                    </Row>
                    <Row className="paletteAction mb-xs" between="md">
                      <Col md={3}>
                        <a className="active" href="/">
                          <i className="far fa-heart"></i>
                        </a>
                      </Col>
                      <Col md={4} className="dFlex justify-end">
                        <span className="dFlex likePalette">
                          <a className="active" href="/">
                            <i className="far fa-thumbs-up"></i>
                          </a>
                          {el.likes}
                        </span>
                      </Col>
                    </Row>
                    <Row center="md">
                      <Col md={5}>
                        <a href="/" className="createdBy">
                          <i class="fas fa-paint-brush"></i> 
                          {el.userName}
                        </a>
                      </Col>
                    </Row>
                  </div>
                </Col>
              )
            })
          }
        </Row>
     </div>










    <Drawer 
    showMask={false}
    handler={false} 
    parent={null} 
    level={null} 
    placement="right" 
    handleChild={false}
    open={drawerOpen}
    // open={false}
    width="380px">
        <div className="paletteDrawerWrp">
          <div className="dFlex justify-between paletteDrawerHeader">
            <h3>View Palette</h3>
            <a href="/">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>

          <div className="paletteTabWrp">
            <ul className="drawerPaletteTab dFlex">
              <li className="active" style={{background: 'red'}}>
                <span><i class="lni lni-checkmark"></i></span>
              </li>
              <li style={{background: 'orange'}}>
                <span><i class="lni lni-checkmark"></i></span>
              </li>
              <li style={{background: 'yellow'}}>
                <span><i class="lni lni-checkmark"></i></span>
              </li>
              <li style={{background: 'green'}}>
                <span><i class="lni lni-checkmark"></i></span>
              </li>
              <li style={{background: 'teal'}}>
                <span><i class="lni lni-checkmark"></i></span>
              </li>
            </ul>
          </div>

          <div className="paletteTabContWrp">
            <div>
              <ul className="colorCodeLists">
                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>HEX</h4>
                    <h3>
                      123445
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                    
                  </div>

                  <div className="colorCode">
                    <h4>HEX CODE</h4>
                    <h3>
                      #123445
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>

                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>RGB</h4>
                    <h3>
                      12, 45, 89
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>

                  <div className="colorCode code_rt">
                    <h4>RGB CODE</h4>
                    <h3>
                      RGB(12, 45, 89)
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>

                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>HSB</h4>
                    <h3>
                      12, 45, 89
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>

                  <div className="colorCode code_rt">
                    <h4>HSB CODE</h4>
                    <h3>
                    HSB(12, 45, 89)
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>


                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>HSL</h4>
                    <h3>
                      12, 45, 89
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>

                  <div className="colorCode code_rt">
                    <h4>HSL CODE</h4>
                    <h3>
                      HSL(12, 45, 89)
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>

                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>CMYK</h4>
                    <h3>
                      12, 45, 89, 34
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>

                  <div className="colorCode code_rt">
                    <h4>CMYK CODE</h4>
                    <h3>
                      CMYK(12, 45, 89, 34)
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>

                <li className="dFlex justify-between">
                  <div className="colorCode">
                    <h4>Name</h4>
                    <h3>
                      Red
                      <a href="/"><i class="far fa-copy"></i></a>
                    </h3>
                  </div>
                </li>


              </ul>
            </div>
          </div>

          <div className="paletteNav dFlex justify-between">
            <div className="dFlex">
              {/* <a title="Previous Palette" className="iconLink" href="/">
                <i class="lni lni-chevron-left"></i>
              </a> */}

              <a title="Export Palette" className="iconLink" href="/">
                <i class="fas fa-file-export"></i>
              </a>
              <a title="Copy All" className="iconLink" href="/">
                <i class="far fa-copy"></i>
              </a>
              <a title="Open Palette" className="iconLink" href="/">
                <i class="fas fa-palette"></i>
              </a>
            </div>
            <div className="dFlex">
              <a title="Previous Palette" className="iconLink" href="/">
                <i class="lni lni-chevron-left"></i>
              </a>
              <a title="Next Palette" className="iconLink" href="/">
                <i class="lni lni-chevron-right"></i>
              </a>
            </div>
          </div>


        </div>
    </Drawer>




    </div>
  );
}

export default App;
