import React, { forwardRef }  from "react"
import {Theme} from "@/themes"
import {TextInput as RNTextInput} from "react-native"
import {
  backgroundColor,
  BackgroundColorProps,
  backgroundColorShorthand,
  BackgroundColorShorthandProps,
  border,
  BorderProps,
  color,
  ColorProps,
  composeRestyleFunctions,
  layout,
  LayoutProps,
  ResponsiveValue,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
  typography,
  TypographyProps,
  useResponsiveProp,
  useRestyle,
  useTheme,
} from "@shopify/restyle"

type RestyleProps = SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  BorderProps<Theme>&
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  ColorProps<Theme> &
  TypographyProps<Theme> &
  LayoutProps<Theme>

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  color,
  spacing,
  spacingShorthand,

  border,
  backgroundColor,
  backgroundColorShorthand,
  typography,
  layout
])

type TextInputProps = React.ComponentPropsWithRef<typeof RNTextInput> &
  RestyleProps & {
    placeholderColor?: ResponsiveValue<keyof Theme['colors'], Theme>
  }

export const TextInput = forwardRef<RNTextInput, TextInputProps>({ placeholderColor, ...rest }, ref)=>{
  const props = useRestyle(restyleFunctions, rest as any)
  const theme = useTheme<Theme>()
  const placeholderTextColorProp = placeholderColor && useResponsiveProp(placeholderColor)
  const placeholderTextColorValue = placeholderTextColorProp && theme.colors[placeholderTextColorProp]

  return(<RNTextInput ref={ref} {...props} placeholderTextColor={placeholderTextColorValue} />)
  
}
