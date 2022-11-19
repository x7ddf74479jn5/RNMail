import {Theme} from "@/themes"
import {createBox} from "@shopify/restyle"
import React from "react"
import {
  ScrollView as NativeScrollView,
  ScrollViewProps as NativeScrollViewProps,
} from "react-native"

const ScrollView = createBox<Theme, NativeScrollViewProps>(NativeScrollView)
export type ScrollViewProps = React.ComponentProps<typeof ScrollView>

export default ScrollView
