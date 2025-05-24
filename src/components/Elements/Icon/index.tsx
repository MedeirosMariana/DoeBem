import { StyleProp, TextStyle } from "react-native"
import { IIcon } from "./interfaces"
import { IconTypes } from "./enums"
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export const Icon = ({
  type,
  color = '#000',
  size = 15,
  style,
  ...iconProps
}: IIcon) => {
  const iconStyle: StyleProp<TextStyle> = {
    ...style,
    color: color,
    fontSize: size
  }

  switch (type) {
    case IconTypes.BuildingShield:
      return <FontAwesome6 name={type} style={iconStyle} {...iconProps} />

    case IconTypes.SupportAgent:
      return <MaterialIcons name={type} style={iconStyle} {...iconProps} />

    case IconTypes.User:
      return <SimpleLineIcons name={type} style={iconStyle} {...iconProps} />
  }
}