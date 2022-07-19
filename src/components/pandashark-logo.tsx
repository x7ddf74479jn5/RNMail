import LogoSVG from "@/images/pandashark_logo.svg"
import {Theme} from "@/themes"
import {ColorProps, useResponsiveProp, useTheme} from "@shopify/restyle"

import React from "react"
import {SvgProps} from "react-native-svg"

type PandasharkLogoProps = Omit<SvgProps, "color"> & ColorProps<Theme>

const PandasharkLogo: React.FC<PandasharkLogoProps> = ({
  color = "$foreground",
  ...rest
}) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || "$foreground"]

  return <LogoSVG {...rest} color={vColor} />
}

export default PandasharkLogo
