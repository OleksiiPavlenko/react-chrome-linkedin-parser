import React from "react";
import { FormGroup, FormControl, Col } from 'react-bootstrap';

const InputGroup = ({ label, placeholder, inputType, name, inputValue, onChange }) => (
    <FormGroup>
        <Col md={ 2 }>
            { label }
        </Col>
        <Col md={ 10 }>
            <FormControl 
                type={ inputType }
                value={ inputValue }
                name={ name }
                onChange={ onChange }
                placeholder={ placeholder }
            />
        </Col>
    </FormGroup>
);

export default InputGroup;