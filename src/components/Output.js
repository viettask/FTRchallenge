import React from "react"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Nextnumber() {


    return (
        <div className="frame output">

            <Container>
                <Row>
                    <Col sm="6" ><span id="numberentered">Please enter the field required above</span></Col>
                    <Col sm="6">
                        <span id="numberandfrequency">The system has not started</span>
                    </Col>

                </Row>
            </Container>




        </div>
    )
}