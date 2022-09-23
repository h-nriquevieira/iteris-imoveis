import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ImovelCard from '../../components/ImovelCard/ImovelCard';
import { getImovelById } from '../../services/imoveisApiServices';

function ImovelSinglePage() {
  const {id} = useParams()
  const [imovel, setImovel] = useState({})

  useEffect(() => {
    getImovelById(id).then(imovelRecebido => setImovel(imovelRecebido))
  },[id])

  return (
    <div className="imovel-single-page">
      <ImovelCard imovel={imovel} />
      <Link to='/imoveis'>Voltar</Link>
    </div>
  );
}

export default ImovelSinglePage;