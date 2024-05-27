import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};

export default App;