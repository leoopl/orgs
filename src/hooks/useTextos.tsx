import { useState, useEffect } from 'react';

import textos from '../mocks/textos.json';

let text: Array<object> = [
  {
    boasVindas: '',
    legenda: '',
    legendaMelhoresProdutores: '',
    tituloProdutores: '',
    tituloProdutor: '',
    tituloCestas: '',
    topoCesta: '',
    botaoComprar: '',
    tituloItens: '',
  },
];

export default function useTextos() {
  const [textos, setTextos] = useState<Array<object>>(text);

  useEffect(() => {
    const retorno = textos;
    setTextos(retorno);
  }, []);

  return textos;
}
