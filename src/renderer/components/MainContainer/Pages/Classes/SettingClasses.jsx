import React from "react";
import { getStorageValue } from "../../../../../config/localStorage.jsx";
import { Container, Col, Row, Form } from "react-bootstrap";
import { GetClassStats } from "../../../../../shared/services/GetClassStats.jsx"

const SettingClasses = ({ data, lang, nameClass, specId }) => {
    // Получаем все статы для выброного класса и специализации
    const stat = GetClassStats(lang || 'en', specId || 0);
    const renderSpecStatSelector = () => {
        const selectOptions = stat.map(spec => {
            return <option key={spec.id} value={spec.id}>{spec.name} ({spec.id})</option>;
        });
        return selectOptions;
    };

    // Получаем список специализаций для выбранного класса
    const renderSpecList = () => {
        const specList = specId.map(spec => {
            return <option key={spec.id} value={spec.id}>{spec.name} ({spec.id})</option>;
        });
        return specList;
    };


    // Обработчики событий - изменение специализации
    const handlerChangeSpec = () => {
        console.log("handlerChangeSpec")
    };

    // Обработчики событий - изменение статистики
    const handleChangeSpecStat = () => {
        console.log("handleChangeSpecStat")
    };

    // Обработчики событий - изменение значения статистики
    const handleChangeSpecStatValue = () => {
        console.log("handleChangeSpecStatValue")
    };

    return (
        <Container fluid className="container">
            <Row>
                <Col xs={12} md={12}>
                    <h5>
                        {data.configuration_pannel || "Settings for Statistic Calculation"}
                    </h5>
                </Col>
            </Row>
            <Row className="border border-secondary rounded row-class">
                <Col xs={6} md={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.class || "Class"}
                        </Form.Label>
                        <Form.Control placeholder={nameClass} disabled />
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec || "Spec"}
                        </Form.Label>
                        <Form.Control required as="select" onChange={() => handleChangeSpecStat}>
                            {renderSpecList()}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec_stat || "Spec Stat"}
                        </Form.Label>
                        <Form.Control required as="select" onChange={() => handleChangeSpecStat} style={{ backgroundColor: '' }}>
                            {renderSpecStatSelector()}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={6} md={3}>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec_stat_value || "Value"}
                        </Form.Label>
                        <Form.Control required placeholder="100" onChange={() => handleChangeSpecStatValue} />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default SettingClasses;