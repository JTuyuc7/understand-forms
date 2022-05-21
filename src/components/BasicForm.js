import { useEffect, useState } from 'react';
import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const [ formValid, setIsFormValid ] = useState(false);

  const { 
    value: enteredName,
    hasError: enteredNameError,
    valueInputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    valueIsValid: nameValueIsValid,
    reset: nameResetForm
  } = useInput( (value) => value.trim() !== '')

  const {
    value: enteredLastName,
    hasError: enteredLastNameError,
    valueInputChangeHandler: lastNameInpuChangetHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    valueIsValid: lastNameIsValid,
    reset: lastNameResetForm
  } = useInput((value) => value.trim() !== '')

  const { 
    value: enteredEmail,
    hasError: enteredEmailError,
    valueInputChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    valueIsValid: emailIsValid,
    reset: emailResetForm
  } = useInput( (value) => value.includes('@'))

  useEffect(() => {
    if(nameValueIsValid && lastNameIsValid && emailIsValid){
      setIsFormValid(true)
    }else{
      setIsFormValid(false)
    }
  },[nameValueIsValid, lastNameIsValid, emailIsValid]);

  const formHandlerSubmit = (e) => {
    e.preventDefault()

    if(!nameValueIsValid && !lastNameIsValid && !emailIsValid) return;

    nameResetForm()
    lastNameResetForm()
    emailResetForm()
  }

  const nameClasses = enteredNameError ? 'form-control invalid': 'form-control';
  const lastNameClasses = enteredLastNameError ? 'form-control invalid': 'form-control';
  const emailNameClasses = enteredEmailError ? 'form-control invalid': 'form-control';
  return (
    <form
      onSubmit={formHandlerSubmit}
    >
      <div className='control-group'>
        <div className={nameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {
            enteredNameError && (<p>Please fill the name field</p>)
          }
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLastName}
            onChange={lastNameInpuChangetHandler}
            onBlur={lastNameInputBlurHandler}
          />
          {
            enteredLastNameError && (<p>Please fill the last name field</p>)
          }
        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
          type='text' 
          id='name' 
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
        />
        {
          enteredEmailError && (<p>Please fill the email field</p>)
        }
      </div>
      <div className='form-actions'>
        <button
          disabled={!formValid}
        >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
