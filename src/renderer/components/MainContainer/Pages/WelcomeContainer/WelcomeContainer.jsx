import React from "react";
import { useLocalStorage } from "../../../../../config/localStorage.jsx";
import { Row, Col, Alert, CardGroup, Card, Container } from "react-bootstrap";

const img1 = require("../../../../../assets/welcome/crafting.png");
const img2 = require("../../../../../assets/welcome/shoes.png");
const img3 = require("../../../../../assets/welcome/weapon.png");

const WelcomeContainer = React.memo(() => {
    const [count, setCount] = useLocalStorage("click", 0);
    const handleClick = () => {
        setCount(count + 1);
        console.log("count: ", count);
    };
    return (
        <div className="welcome-container">
            <Container fluid style={{ marginTop: '40px' }}>
                <Row>
                    <Col>
                        <Alert key='success' variant='success' onClick={() => handleClick()}>
                            Добро пожаловать! <br />
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert key='secondary' variant='secondary'>
                            1 - Для начало работы выберите один из пунктов меню.<br />
                            2 - После выбора пункта меню, вам будет предложено открыть новую вкладку [+]<br />
                        </Alert>
                    </Col>
                </Row>
                <CardGroup>
                    <Card>
                        <Card.Img className="maximize-img" variant="top" src={img1.default} />
                        <Card.Body>
                            <Card.Title>Создание предметов под баланс в World of Warcraft 3.3.5</Card.Title>
                            <Card.Text>
                                Узнайте о процессе создания предметов с учетом баланса в версии игры World of Warcraft 3.3.5.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="maximize-img" variant="top" src={img2.default} />
                        <Card.Body>
                            <Card.Title>Генерация статистик в сете с учетом одного предмета</Card.Title>
                            <Card.Text>
                                Узнайте, как выбор одного предмета может влиять на общий баланс и эффективность вашего персонажа.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img className="maximize-img" variant="top" src={img3.default} />
                        <Card.Body>
                            <Card.Title>Генерация статистик оружия для каждого класса</Card.Title>
                            <Card.Text>
                                Исследуйте процесс генерации статистик в оружии, специально подобранном для каждого класса в игре.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
});

export default WelcomeContainer;