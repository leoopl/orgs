import { Text, StyleSheet } from 'react-native';

interface Props {
  children: string;
  style: any;
}

type IFontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export default function Texto({ children, style }: Props) {
  let estilo = estilos.texto;

  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  texto: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal' as IFontWeight,
  },
  textoNegrito: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold' as IFontWeight,
  },
});
