import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import { CssBaseline } from "@mui/material";
import ImoveisPage from "./pages/ImoveisPage";
import ImovelSinglePage from "./pages/ImovelSinglePage/ImovelSinglePage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <MenuPage>
        <Routes>
          <Route path='/' element={<p>Home</p>} />
          <Route path='/imoveis' element={<ImoveisPage />} />
          <Route path='/sobre' element={<p>Sobre</p>} />
          <Route path='/imoveis/:id' element={<ImovelSinglePage />} />
        </Routes>
      </MenuPage>
    </BrowserRouter>
  );
}

export default App;
