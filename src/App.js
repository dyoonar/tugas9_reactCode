import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import { Row, Col, Container, Spinner} from 'react-bootstrap'
import PgNav from './component/PgNav';
import PageBC from './component/PageBC';
import PageTbl from './component/PageTbl';
import PagePop from './component/PagePop';
import PageOL from './component/PageOL';

function App() {
  return (
    <div>
      <PgNav/>
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={{ span: 4, offset: 4 }}><PageBC/> </Col>
          </Row>
          <br />
          <Row>
            <Col md={11}><h3>Rumor Transfer Pemain</h3></Col>
            <Col md={1}><Spinner animation="border" variant="success" /><Spinner animation="grow" variant="success" /></Col>
          </Row>
          <PageTbl />
          <Row>
            <Col md={1}><PageOL/></Col>
            <Col md={2}><PagePop/></Col>
          </Row>
        </Container>
        
        
    </div>
  );
}

export default App;
