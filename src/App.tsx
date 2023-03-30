import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./pages/CountryNews";
import LandingPage from "./pages/LandingPage";
import { Provider } from "react-redux";
import { store } from "./store";

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route index element={<LandingPage />} />
              <Route path="/country/:id" element={<CountryNews />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
