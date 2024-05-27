import Payment from "./pages/Payment";
import Welcome from "./pages/Welcome";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
};

export default App;
