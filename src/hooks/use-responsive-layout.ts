import {RESPONSIVE_SCREEN_BREAKPOINT} from "@/consts"
import {useWindowDimensions} from "react-native"

export const useResponsiveLayout = () => {
  const screenSize = useWindowDimensions()
  const isTablet =
    screenSize.width >= RESPONSIVE_SCREEN_BREAKPOINT ||
    screenSize.height >= RESPONSIVE_SCREEN_BREAKPOINT
  const isPortrait = screenSize.width < screenSize.height
  return {isTablet, isPortrait}
}
