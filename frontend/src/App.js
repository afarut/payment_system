import Payment from "./pages/Payment";
import Welcome from "./pages/Welcome";
import Success from './pages/Success';
import Error from './pages/Error'

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/success" element={<Success />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
