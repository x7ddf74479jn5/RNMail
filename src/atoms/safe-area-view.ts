import {Theme} from "@/themes"
import {createBox} from "@shopify/restyle"
import {SafeAreaView as NativeSafeAreaView, ViewProps} from "react-native"

export const SafeAreaView = createBox<Theme, ViewProps>(NativeSafeAreaView)

export type SafeAreaViewProps = React.ComponentProps<typeof SafeAreaView>
