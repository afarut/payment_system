import Payment from "./pages/Payment";
import Welcome from "./pages/Welcome";
import Success from './pages/Success';
import Error from './pages/Error'

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [erorrMsg, setErrorMsg] = useState('')

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/payment" element={<Payment setErrorMsg={setErrorMsg} />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/*" element={<Error errorMessage={erorrMsg} />} />
      </Routes>
    </>
  );
};

export default App;
