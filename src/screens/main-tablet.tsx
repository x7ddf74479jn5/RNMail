import {Box} from "@/atoms"
import Sidebar from "@/components/sidebar"
import ThreeColumnLayout from "@/components/three-column-layout"
import {useResponsiveLayout} from "@/hooks/use-responsive-layout"
import {HomeDrawerParamList, RootStackParamList} from "@/navs"
import {DrawerScreenProps} from "@react-navigation/drawer"
import {CompositeScreenProps} from "@react-navigation/native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import React, {useState, useCallback} from "react"
import DetailScreenForTablet from "./detial-tablet"
import NoteListScreenForTablet from "./note-list-tablet"

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreenForTablet({navigation}: Props) {
  const {isPortrait} = useResponsiveLayout()
  const [sidebarVisible, setSidebarVisible] = useState(true)
  const [distractionFreeMode, setDistractionFreeMode] = useState(false)
  const toggleSidebar = useCallback(() => {
    setSidebarVisible(visible => !visible)
  }, [])
  const toggleDistraction = useCallback(() => {
    setDistractionFreeMode(enabled => !enabled)
  }, [])

  const leftViewVisible = !isPortrait && sidebarVisible && !distractionFreeMode

  return (
    <ThreeColumnLayout
      renderLeftView={() => <Sidebar />}
      renderMiddleView={() => (
        <NoteListScreenForTablet
          navigation={navigation}
          onSidebarToggle={toggleSidebar}
        />
      )}
      renderRightView={viewProps => (
        <DetailScreenForTablet
          {...viewProps}
          onDistractionFreeMode={toggleDistraction}
        />
      )}
      leftViewWidth={260}
      middleViewWidth={320}
      leftViewVisible={leftViewVisible}
      middleViewVisible={!distractionFreeMode}
    />
  )
}
