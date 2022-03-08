import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Home';
import Cesta from './src/telas/Cesta';

export default function App() {
  const produtores = useProdutores(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Home melhoresProdutores={false} />
      {produtores.length > 0 && (
        <Cesta
          inicialNome={produtores[0].nome}
          inicialImage={produtores[0].imagem}
          detalhes={produtores[0].cestas[0].detalhes}
          itens={produtores[0].cestas[0].itens}
        />
      )}
    </SafeAreaView>
  );
}
