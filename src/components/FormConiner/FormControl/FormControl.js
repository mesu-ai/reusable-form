import React from 'react';
import Input from '../FormTypes/Input';

const FormControl = (props) => {
    const {control, ...rest}=props;
    switch (control) {

        case 'input':
            return <Input {...rest}/>
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        
        // case 'input':

    
        break;
        default: return null;
    }

};

export default FormControl;