import Header from "../components/Header";
import {Col, Row} from "antd";

const Home = () => (
    <>
        <Header />
        <Row className="main-content" type="flex" justify="center">
            <Col className="main-content-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                左侧
            </Col>

            <Col className="main-content-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                右侧
            </Col>
        </Row>


    </>
)

export default Home
