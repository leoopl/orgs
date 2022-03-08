import { useState, useEffect } from 'react';

import produtores from 'mocks/produtores.json';

type INovaLista = typeof produtores;

export default function useProdutores(melhoresProdutores: boolean) {
  const [lista, setLista] = useState<INovaLista | []>([]);

  useEffect(() => {
    const retorno = produtores;
    retorno.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    let novaLista = retorno;

    if (melhoresProdutores) {
      novaLista = novaLista.filter(produtor => produtor.estrelas > 3);
    }
    setLista(novaLista);
  }, []);

  return lista;
}
