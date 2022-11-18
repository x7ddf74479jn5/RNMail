import {Container} from "@/atoms"
import HeaderBar from "@/components/header-bar"
import MoveNoteSheet from "@/components/move-note-sheet"
import NoteList from "@/components/note-list"
import {NoteListHeaderTitleBar} from "@/components/note-list-header-title-bar"
import useStickyHeader from "@/hooks/use-sticky-header"
import {HomeDrawerParamList, RootStackParamList} from "@/navs"
import {editingNoteIdAtom} from "@/states/editor"
import {DrawerScreenProps} from "@react-navigation/drawer"
import {CompositeScreenProps} from "@react-navigation/native"
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {useAtom} from "jotai"
import React, {useCallback, useRef, useState} from "react"

type MainScreenProps = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, "Main">,
  NativeStackScreenProps<RootStackParamList>
>

export default function MainScreen({navigation}: MainScreenProps) {
  const refMoveNoteSheet = useRef<MoveNoteSheet>(null)
  const {handleNoteListLayout, handleScroll, headerBarHeight, headerBarStyle} =
    useStickyHeader()
  const [concealNoteListItem, setConcealNoteListItem] = useState<
    (() => void) | null
  >(null)
  const [, setEditingNoteId] = useAtom(editingNoteIdAtom)
  const handleSidebarToggle = useCallback(() => {
    navigation.toggleDrawer()
  }, [navigation])

  const handleNoteListItemPress = useCallback((noteId: string) => {
    setEditingNoteId(noteId)
    navigation.navigate("Detail")
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
        ListHeaderComponent={NoteListHeaderTitleBar}
      />
      <HeaderBar
        style={headerBarStyle}
        onLayout={handleNoteListLayout}
        onSideBarToggle={handleSidebarToggle}></HeaderBar>
      <MoveNoteSheet
        ref={refMoveNoteSheet}
        onClose={handleMoveNoteSheetClose}
      />
    </Container>
  )
}
