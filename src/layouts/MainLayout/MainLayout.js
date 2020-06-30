import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import AppRoutes from '../../routing/appRoutes'
import globalStyles from '../../styles/globalStyle';

const MainLayout = () => {

    const { mainLayout } = globalStyles()
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
      </div>
    );
}
 
export default MainLayout;