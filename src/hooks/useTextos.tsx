import { useState, useEffect } from 'react';

import textos from 'mocks/textos.json';

let text = {
  boasVindas: '',
  legenda: '',
  legendaMelhoresProdutores: '',
  tituloProdutores: '',
  tituloProdutor: '',
  tituloCestas: '',
  topoCesta: '',
  botaoComprar: '',
  tituloItens: '',
};

export default function useTextos() {
  const [textos, setTextos] = useState(text);

  useEffect(() => {
    const retorno = textos;
    setTextos(retorno);
  }, []);

  return textos;
}
