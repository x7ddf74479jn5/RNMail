import {Box, Container, Text, TouchableOpacity} from "@/atoms"
import HeaderBar from "@/components/header-bar"
import FeatherIcon from "@/components/icon"
import MoveNoteSheet from "@/components/move-note-sheet"
import NoteList from "@/components/note-list"
import ThemePicker from "@/components/theme-picker"
import useStickyHeader from "@/hooks/use-sticky-header"
import {HomeDrawerParamList, RootStackParamList} from "@/navs"
import {DrawerScreenProps} from "@react-navigation/drawer"
import {CompositeScreenProps} from "@react-navigation/native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import React, {useCallback, useRef, useState} from "react"

type MainScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen({navigation}: MainScreenProps) {
  const refThemePicker = useRef<ThemePicker>(null)
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const {handleNoteListLayout, handleScroll, headerBarHeight, headerBarStyle} =
    useStickyHeader()
  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null)
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])
  const handleMenuToggle = useCallback(() => {
    const {current: menu} = refThemePicker
    if (menu) {
      menu.show()
    }
  }, [])
  const handleNoteListItemPress = useCallback((noteId: string) => {
    navigation.navigate("Detail", {
      noteId,
    })
  }, [])
  const handleNoteListItemSwipeLeft = useCallback(
    (noteId: string, conceal: () => void) => {
      const {current: menu} = refMoveNoteSheet
      if (menu) {
        menu.show()
        setConcealNoteListItem(() => conceal)
      }
    },
    [],
  )
  const handleMoveNoteSheetClose = useCallback(() => {
    concealNoteListItem && concealNoteListItem()
    setConcealNoteListItem(null)
  }, [concealNoteListItem])
  return (
    <Container justifyContent="center" alignItems="center">
      <NoteList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={handleNoteListItemPress}
        onItemSwipeLeft={handleNoteListItemSwipeLeft}
      />
      <HeaderBar style={headerBarStyle} onLayout={handleNoteListLayout}>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleSidebarToggle}>
          <FeatherIcon size={22} name="menu" />
        </TouchableOpacity>
        <Box flex={1} alignItems="center">
          <Text fontWeight="bold">All Notes</Text>
        </Box>
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleMenuToggle}>
          <FeatherIcon size={22} name="more-vertical" />
        </TouchableOpacity>
      </HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
      <ThemePicker ref={refThemePicker} />
    </Container>
  )
}
