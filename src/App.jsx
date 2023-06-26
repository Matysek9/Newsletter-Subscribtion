import { useState } from "react";
import styles from "./App.module.scss";
import FormEmailComponent from "./components/FormEmailComponent";
import ImageComponent from "./components/ImageComponent";
import InformationComponent from "./components/InformationComponent";
import SuccessComponent from "./components/SuccessComponent";

function App() {
  // Zmienić z powrotem na false!!
  const [state, setState] = useState({handlerState: false, handlerEmail: ""});

  function stateUpdate(payload) {
    setState({handlerState: payload.handlerState, handlerEmail: payload.handlerEmail});
  }

  return (
    <div className={styles.flex}>
      {!state.handlerState && (
        <div className={styles.cardContainer}>
          <ImageComponent
            desktopMax={"375px"}
            mobileImg={"./images/illustration-sign-up-mobile.svg"}
            desktopImg={"./images/illustration-sign-up-desktop.svg"}
          />
          <div className={styles.flex}>
            <InformationComponent />
            <FormEmailComponent submitStateHandler={stateUpdate} />
          </div>
        </div>
      )}
      {state.handlerState && <SuccessComponent email={state.handlerEmail}/>}
    </div>
  );
}

export default App;
