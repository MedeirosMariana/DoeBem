import { Image } from "react-native"
import { IHeader } from "./interfaces"

import styles from './styles'
import { Icon } from "../Icon"
import { IconTypes } from "../Icon/enums"

export const Header = ({
  profileImageSrc,
  profileName
}: IHeader) => (
  <div style={styles.container}>
    <div style={styles.profileContent}>
      {!!profileImageSrc
        ? (
          <Image
            src={profileImageSrc}
            width={100}
            height={100}
          />
        )
        : <Icon type={IconTypes.User} size={15} />
      }

      <span style={styles.title}>{profileName}</span>
    </div>

    {/** Componente de Navegação do App */}
  </div>
)