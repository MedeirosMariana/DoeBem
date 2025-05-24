import { IHeader } from "../Header/interfaces";

/**
 * Interface com propriedades para o container da página.
 */
export interface IContainerPage extends IHeader {
  /**
   * Elementos a serem rendeizados no container.
   */
  children:  React.ReactElement
}