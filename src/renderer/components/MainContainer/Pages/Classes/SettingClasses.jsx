import React from "react";
import { useLocalStorage } from "../../../../../config/localStorage.jsx";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import { GetClassStats } from "../../../../../shared/services/GetClassStats.jsx"
import { GetInventoryType } from "../../../../../shared/services/GetInventoryType.jsx";

const SettingClasses = ({ data, nameClass, specId, localStorageName }) => {
    // localStorage
    const [selecterSpec, setSelecterSpec] = useLocalStorage({ localStorageName } + '-localStorageName', specId[0]);
    const [selectedInventoryType, setSelectedInventoryType] = useLocalStorage({ localStorageName } + '-selectedInventoryType', 1);
    const [selectedStat, setSelectedStat] = useLocalStorage({ localStorageName } + '-selectedStat', 7);
    const [selectedStatValue, setSelectedStatValue] = useLocalStorage({ localStorageName } + '-selectedStatValue', 100);

    // Получаем все статы для выброного класса и специализации
    let stat = GetClassStats(selecterSpec || 0);
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

    const renderInventoryType = () => {
        const inventoryType = GetInventoryType();
        const inventoryTypeList = inventoryType.map(type => {
            return <option key={type.id} value={type.id}>{type.name} ({type.id})</option>;
        });
        return inventoryTypeList;
    };


    // Обработчики событий - изменение специализации
    const handlerChangeSpec = (event) => {
        const selectedValue = event.target.value;
        setSelecterSpec(selectedValue);
        stat = GetClassStats(selecterSpec || 0);
    };

    // Обработчики событий - изменение статистики
    const handleChangeSpecStat = (event) => {
        const selectedValue = event.target.value;
        setSelectedStat(selectedValue);
    };

    // Обработчики событий - изменение значения статистики
    const handleChangeSpecStatValue = (event) => {
        const selectedValue = event.target.value;
        setSelectedStatValue(selectedValue);
    };

    // Обработчики событий - изменение типа инвентаря
    const handleChangeInventoryType = (event) => {
        const selectedValue = event.target.value;
        setSelectedInventoryType(selectedValue);
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
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.class || "Class"}
                        </Form.Label>
                        <Form.Control placeholder={nameClass} disabled />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec || "Spec"}
                        </Form.Label>
                        <Form.Control required as="select" value={selecterSpec} onChange={handlerChangeSpec}>
                            {renderSpecList()}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec_stat || "Spec Stat"}
                        </Form.Label>
                        <Form.Control required as="select" value={selectedStat} onChange={handleChangeSpecStat}>
                            {renderSpecStatSelector()}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.spec_stat_value || "Value"}
                        </Form.Label>
                        <Form.Control required type="number" value={selectedStatValue} placeholder="100" onChange={handleChangeSpecStatValue} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            {data.inventoryType || "Inventory Type"}
                        </Form.Label>
                        <Form.Control required as="select" value={selectedInventoryType} onChange={handleChangeInventoryType}>
                            {renderInventoryType()}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col className="d-flex align-items-center">
                    <Button variant="success">
                        {data.generate || "Generate"}
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SettingClasses;