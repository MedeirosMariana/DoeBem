import { StyleProp, TextStyle } from 'react-native'
import { IconProps as ReactNativeVectorIconsProps } from 'react-native-vector-icons'
import { IconTypes } from './enums'

/**
 * Interface com propriedades do componente de ícones.
 */
export interface IIcon extends Omit<ReactNativeVectorIconsProps, 'name' | 'style'> {
  /**
   * Tipo do ícone.
   */
  type: IconTypes

  /**
   * Cor do ícone.
   */
  color?: string

  /**
   * Tamanho do ícone.
   */
  size?: number

  /**
   * Estilização para o ícone.
   */
  style?: Omit<StyleProp<TextStyle>, 'fontSize' | 'color'>
}