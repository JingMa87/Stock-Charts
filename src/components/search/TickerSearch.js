import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function TickerSearch(props) {
    return (
        <InputGroup>
            <FormControl type="text" placeholder="Search" />
            <InputGroup.Append>
                <Button><FontAwesomeIcon icon={faSearch} /></Button>
            </InputGroup.Append>
        </InputGroup>
    )
}