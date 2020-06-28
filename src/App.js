import React, { useState, useEffect } from 'react';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { PALETTE_COLORS } from './constants/palettesColor';


function App() {

  const [state, setstate] = useState([])
  const [gridCount, setGridCount] = useState(12)

  const changeView = (type) => (e) => {
    e.preventDefault()
    setGridCount(type === 'list' ? 12 : 4 )
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
                    Palette
                  </a>
                </h1>
              </Col>

              <Col md={9}>
                <div className="dFlex justify-end">
                  <div className="dFlex">
                    <button className="appButton appButton-bg">
                      Create Palette
                    </button>
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
        <Row middle="md" className="mb-2" between="md">
          <Col md={6}>
            <h1>Explore Palettes</h1>
          </Col>
          <Col md={6}>
            <div className="dFlex justify-end">
              <a onClick={changeView('list')} className="iconLink active" title="List View" href="#">
                <i class="fas fa-th-list"></i>
              </a>
              <a onClick={changeView('grid')} className="iconLink" title="Grid View" href="#">
                <i class="fas fa-th"></i>
              </a>
            </div>
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
          {/* { state.map( el => {
              return (
                <Col key={el.likes} md={12}>
                  <div className="paletteWrp">
                    <Row end="md" middle="md" className="mb-1">
                      
                      <Col md={4}>
                        <div className="dFlex justify-end">
                          <a title="Export Palette" className="iconLink" href="/">
                            <i class="fas fa-file-export"></i>
                          </a>
                          <a title="Copy All" className="iconLink" href="/">
                            <i class="far fa-copy"></i>
                          </a>
                          <a title="Edit Palette" className="iconLink" href="/">
                            <i class="fas fa-palette"></i>
                          </a>
                          <a title="View Palette" className="iconLink" href="/">
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
                    <Row className="paletteAction" between="md">
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
                  </div>
                </Col>
              )
            })
          } */}


          { state.map( el => {
              return (
                <Col key={el.likes} className="mb-1" md={gridCount}>
                  <div className="paletteWrp">
                    <Row end="md" middle="md" className="mb-1">
                      <Col md={4}>
                        <div className="dFlex justify-end">
                          <a title="Export Palette" className="iconLink" href="/">
                            <i class="fas fa-file-export"></i>
                          </a>
                          <a title="Copy All" className="iconLink" href="/">
                            <i class="far fa-copy"></i>
                          </a>
                          <a title="Edit Palette" className="iconLink" href="/">
                            <i class="fas fa-palette"></i>
                          </a>
                          <a title="View Palette" className="iconLink" href="/">
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
    </div>
  );
}

export default App;
