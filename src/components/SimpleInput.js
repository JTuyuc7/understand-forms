import React, { useState, useEffect } from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const { 
    value: enteredName, 
    hasError: nameInputHasError, 
    valueInputChangeHandler: nameInputChangeHandler, 
    inputBlurHandler: nameInputBlurHandler,
    valueIsValid: enteredNameIsValid,
    reset
  } = useInput( (value) => value.trim() !== '');

  const { 
    value: enteredEmail, 
    hasError: emailInputHasError, 
    valueInputChangeHandler: emailInputChangeHandler, 
    inputBlurHandler: emailInputBlurHandler,
    valueIsValid: enteredEmailIsValid,
    reset: resetEmail
  } = useInput( (value) => value.includes('@'));

  // const [ enteredName, setEnteredName ] = useState('');
  // //const [ enteredNameIsValid, setEnteredNameIsValid ] = useState(false);
  // const [ enteredTouched, setEnteredTouched ] = useState(false)
  const [ setFormValid, setFormIsValid ] = useState(false)

  //const [ enteredEmail, setEnteredEmail ] = useState('');
  //const [ touchedEmail, setTouchedEmail ] = useState(false);

  // const enteredNameisValid = enteredName.trim() !== '';
  // const nameInputIsValid = !enteredNameisValid && enteredTouched;

  //const enteredEmailIsValid = enteredEmail.includes('@');
  //const enteredEmailIsInvalid = !enteredEmailIsValid && touchedEmail

  useEffect(() => {
    if(enteredNameIsValid && enteredEmailIsValid){
      setFormIsValid(true)
    }else {
      setFormIsValid(false)
    }
  },[enteredNameIsValid, enteredEmailIsValid])

  // const nameInputChangeHandler = (e) => {
  //   setEnteredName(e.target.value)
  // }

  //const emailInputChangeHandler = (e) => {
    //setEnteredEmail(e.target.value)
  //}

  //const emailInputBlurHandler = (e) => {
    //setTouchedEmail(true)
  //}

  // const nameInputBlurHandler = (e) => {
  //   setEnteredTouched(true)
  // }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    //setEnteredTouched(true)

    if(!enteredNameIsValid && !enteredEmailIsValid){
      return;
    }
    console.log(enteredName, 'name typed')
    //setEnteredName(''); // Reset the form
    reset()
    resetEmail()
    //setEnteredEmail('')
    //setTouchedEmail(false)
    //setEnteredTouched(false)
  }

  const classes = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form
      onSubmit={formSubmitHandler}
    >
      <div className={classes}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {
          nameInputHasError && ( <p className='error-text'>Please fill the field</p>)
        }
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input 
          type='email' 
          id='name' 
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {
          emailInputHasError && ( <p className='error-text'>Please enter a valid email</p>)
        }
      </div>
      <div className="form-actions">
        <button disabled={!setFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
