import {Theme} from "@/themes"
import {ColorProps, useResponsiveProp, useTheme} from "@shopify/restyle"
import React from "react"
import Feather from "react-native-vector-icons/Feather"

export type IconProps = React.ComponentProps<typeof Feather>
type FeatherIconProps = Omit<IconProps, "color"> & ColorProps<Theme>

const FeatherIcon: React.FC<FeatherIconProps> = ({
  color = "$foreground",
  ...rest
}) => {
  const theme = useTheme<Theme>()
  const colorProps = useResponsiveProp(color)
  const vColor = theme.colors[colorProps || "$foreground"]

  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
