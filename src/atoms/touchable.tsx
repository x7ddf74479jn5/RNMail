import React from "react"
import Pressable, {PressableProps} from "./pressable"

import {Platform} from "react-native"
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  opacity,
  OpacityProps,
  ResponsiveValue,
  useResponsiveProp,
  useTheme,
  useRestyle,
} from "@shopify/restyle"
import {Theme} from "@/themes"

type RestyleProps = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  backgroundColor,
  backgroundColorShorthand,
  opacity,
  border,
])

interface TouchableProps extends PressableProps {
  pressed?: RestyleProps
  rippleColor?: ResponsiveValue<keyof Theme["colors"], Theme>
  rippleBorderless?: boolean
}

const Touchable: React.FC<TouchableProps> = ({
  pressed,
  rippleColor,
  rippleBorderless,
  style,
  ...rest
}) => {
  const {style: pressedStyle} = pressed
    ? useRestyle(restyleFunctions, pressed)
    : {style: undefined}
  const theme = useTheme<Theme>()
  const rippleColorProp = rippleColor && useResponsiveProp(rippleColor)
  const rippleColorValue =
    rippleColor && rippleColorProp && theme.colors[rippleColorProp]
  return (
    <Pressable
      {...rest}
      android_ripple={{color: rippleColorValue, borderless: rippleBorderless}}
      // @ts-ignore
      style={({pressed: isPressed}) =>
        isPressed ? [style, pressedStyle] : style
      }
    />
  )
}

export const TouchableOpacity: React.FC<TouchableProps> = props => (
  <Touchable
    rippleColor="$foreground"
    {...props}
    pressed={{opacity: Platform.select({ios: 0.6})}}
  />
)

export default Touchable
