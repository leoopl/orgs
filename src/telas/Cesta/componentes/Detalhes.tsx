import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import useTextos from 'hooks/useTextos';
import Texto from 'componentes/Texto';

interface Props {
  inicialImage: any;
  inicialNome: string;
  detailsNome: string;
  detailsPreco: string;
  detailsDesc: string;
}

export default function Detalhes({
  inicialImage,
  inicialNome,
  detailsNome,
  detailsPreco,
  detailsDesc,
}: Props) {
  const { botaoComprar } = useTextos();

  return (
    <>
      <Texto style={estilos.nome}>{detailsNome}</Texto>
      <View style={estilos.fazenda}>
        <Image source={inicialImage} style={estilos.imagemFazenda} />
        <Texto style={estilos.nomeFazenda}>{inicialNome}</Texto>
      </View>
      <Texto style={estilos.descricao}>{detailsDesc}</Texto>
      <Texto style={estilos.preco}>{detailsPreco}</Texto>

      <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textoBotao}>{botaoComprar}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  fazenda: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
});
