import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import AppRoutes from '../../routing/appRoutes'
import globalStyles from '../../styles/globalStyle';
import { ToastContainer  } from 'react-toastify';
import { Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {

    const { mainLayout, toastifyContainer } = globalStyles()
    return (
      <div>
        <Row>
          <Col xs={12} md={12}>
            <Header />
          </Col>
        </Row>
        <div className={mainLayout}>
            { AppRoutes }
        </div>

        <ToastContainer className={toastifyContainer} limit={3} transition={Slide} closeButton={false} autoClose={1100} />
      </div>
    );
}
 
export default MainLayout;