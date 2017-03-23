import React from "react";
import { FormGroup, Col } from 'react-bootstrap';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

const SelectGroup = ({ label, placeholder, inputValue, onChange, options }) => (
    <FormGroup>
        <Col md={ 2 }>
            { label }
        </Col>
        <Col md={ 10 }>
            <Select
                placeholder={ placeholder }
                options={ options }
                multi
                simpleValue
                value={ inputValue }
                onChange={ value => onChange(value) }
            />
        </Col>
    </FormGroup>
);

export default SelectGroup;