import "./App.scss";
import ImageComponent from "./components/ImageComponent";
import InformationComponent from "./components/InformationComponent";

function App() {

  return (
    <div>
      <ImageComponent desktopMax={"375px"} mobileImg={"./images/illustration-sign-up-mobile.svg"} desktopImg={"./images/illustration-sign-up-desktop.svg"}/>
      <InformationComponent/>
    </div>
  );
}

export default App;
