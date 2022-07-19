import {Theme} from "@/themes"
import {useTheme} from "@shopify/restyle"
import React from "react"
import {StatusBar as NativeStatusBar} from "react-native"
const StatusBar = () => {
  const theme = useTheme<Theme>()
  return (
    <NativeStatusBar
      animated
      backgroundColor={theme.colors.$windowBackground || "white"}
      barStyle={theme.statusBar.barStyle}
    />
  )
}

export default StatusBar
