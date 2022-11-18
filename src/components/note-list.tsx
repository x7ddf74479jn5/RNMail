import NoteListItem from "@/components/note-list-item"
import {Note} from "@/models"
import {Theme} from "@/themes"
import {createBox} from "@shopify/restyle"
import React, {useCallback} from "react"
import {
  FlatListProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native"
import NOTES from "@/fixtures/notes"
import Animated, {AnimateProps} from "react-native-reanimated"
import {Box} from "@/atoms"

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<Note>>>(
  Animated.FlatList,
)

export interface NoteListProps {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
  ListHeaderComponent?: React.ComponentType<any> | null | undefined
}

const NoteList: React.FC<NoteListProps> = ({
  contentInsetTop,
  onScroll,
  onItemPress,
  onItemSwipeLeft,
  ListHeaderComponent,
}) => {
  const renderItem = useCallback(
    ({item}) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft],
  )

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={NOTES}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListEmptyComponent={
        <Box>
          <>
            <Box width="100%" height={contentInsetTop} />
            {ListHeaderComponent && <ListHeaderComponent />}
          </>
        </Box>
      }
    />
  )
}

export default NoteList
