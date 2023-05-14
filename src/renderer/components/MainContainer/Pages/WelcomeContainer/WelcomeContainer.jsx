import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Alert from 'react-bootstrap/Alert';

import img1 from "../../../../../assets/welcome/crafting.png";
import img2 from "../../../../../assets/welcome/shoes.png";
import img3 from "../../../../../assets/welcome/weapon.png";

const WelcomeContainer = () => {
    return (
        <div className="welcome-container">
            <Container fluid>
                <Alert key='secondary' variant='secondary'>
                    Добро пожаловать! Мы рады видеть вас здесь.<br />
                    <span style={{ textAlign: 'center' }}>Пожалуйста, выберите один из пунктов меню, чтобы начать работу.</span>
                </Alert>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <Card.Title>Создание предметов под баланс в World of Warcraft 3.3.5</Card.Title>
                            <Card.Text>
                                Узнайте о процессе создания предметов с учетом баланса в версии игры World of Warcraft 3.3.5.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <Card.Title>Генерация статистик в сете с учетом одного предмета</Card.Title>
                            <Card.Text>
                                Узнайте, как выбор одного предмета может влиять на общий баланс и эффективность вашего персонажа.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
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
}

export default WelcomeContainer;