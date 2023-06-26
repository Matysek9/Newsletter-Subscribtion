import React, { useReducer,useRef } from "react";
import styles from "./FormEmailComponent.module.scss";

const initialValue = {validEmail: true, validColorTheme: ""}

function reducerFunction(state,action){
  switch (action.type) {
    case "EMAILCHANGE":
      console.log(action.payload);
      if(action.payload.includes("@") && action.payload.includes(".") ){
        return initialValue;
      }
      else{
        return { validEmail:false, validColorTheme: styles.error}
      }
      
  
    default:
      return initialValue
  }
}


const FormEmailComponent = (props) => {
  const inputValue = useRef("");

  const [validEmailState, dispatcher] = useReducer(reducerFunction, {validEmail : true, validColorTheme: ""} )
  
  function submitHandler(event) {
    event.preventDefault();
    console.log("SUBMIT");
    props.submitStateHandler({handlerState: validEmailState.validEmail, handlerEmail: inputValue.current.value});

  }
  
  function click(){
    dispatcher({type: "EMAILCHANGE", payload: inputValue.current.value})
  }
  return (
    <form className={styles.formLayoutControm} onSubmit={submitHandler}>
      <div className={styles.flex}>
        <span>Email adress</span>
    {!validEmailState.validEmail && <span className={styles.errorMessage}>Valid email required</span>}
      </div>
      <input type="text" className={validEmailState.validColorTheme} placeholder="email@company.com" onBlur={click} ref={inputValue}/>
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default FormEmailComponent;
