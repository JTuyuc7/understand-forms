import { useState } from 'react';

const useInput = (validateValue) => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ isTouched, setIsTouched ] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueInputChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return{
        value: enteredValue,
        touched: isTouched,
        hasError: hasError,
        valueInputChangeHandler,
        inputBlurHandler,
        valueIsValid: valueIsValid,
        reset: reset
    }

}

export default useInput