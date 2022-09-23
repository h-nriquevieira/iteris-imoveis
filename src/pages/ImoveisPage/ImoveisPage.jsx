import React, { useEffect, useState } from 'react';
import ImovelCard from '../../components/ImovelCard/ImovelCard';
import { getImoveis } from '../../services/imoveisApiServices';

function ImoveisPage() {
  const [listaImoveis, setListaImoveis] = useState([])

  useEffect(() => {
    getImoveis()
      .then(res => setListaImoveis(res))
  }
    , [])

  return (
    <div className="imoveis">
      {listaImoveis.map((item, i) => <ImovelCard key={i} imovel={item}  />)}
    </div>
  );
}

export default ImoveisPage;