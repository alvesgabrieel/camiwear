import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Novidades from "./pages/Novidades";
import Biquinis from "./pages/Biquinis";
import SaidasDePraia from "./pages/SaidasDePraia";
import SobreALoja from "./pages/SobreALoja";
import Maios from "./pages/Maios";

//products
import ConjuntoMay from "./pages/Produtos/ConjuntoMay";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novidades" element={<Novidades />} />
      <Route path="/biquinis" element={<Biquinis />} />
      <Route path="/maios" element={<Maios />} />
      <Route path="/saidasdepraia" element={<SaidasDePraia />} />
      <Route path="/sobrealoja" element={<SobreALoja />} />
      <Route path="/produtos/conjuntomay" element={<ConjuntoMay />} />
    </Routes>
  );
};

export default Rotas;
