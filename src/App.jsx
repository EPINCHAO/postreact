import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import FireStore from "./pages/FireStore";
import Login from "./pages/Login";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/users" element={<FireStore></FireStore>}></Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
              <New></New>
              <FireStore></FireStore>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
