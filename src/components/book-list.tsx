import BookListItem from "@/components/book-list-item"
import {Book} from "@/models"
import {Theme} from "@/themes"
import {BottomSheetFlatList} from "@gorhom/bottom-sheet"
import {ColorProps, createBox} from "@shopify/restyle"
import React, {useCallback} from "react"
import {FlatList, FlatListProps} from "react-native"
import BOOKS from "@/fixtures/books"

const StyledFlatList = createBox<Theme, FlatListProps<Book>>(FlatList)
const StyledBottomSheetFlatList = createBox<Theme, FlatListProps<Book>>(
  BottomSheetFlatList,
)

type BookListProps = {
  inBottomSheet?: boolean
  onPressItem: (bookId: string) => void
  headerComponent?: React.FC<any>
} & ColorProps<Theme>

const BookList: React.FC<BookListProps> = ({
  onPressItem,
  inBottomSheet,
  headerComponent,
  color,
}) => {
  const renderItem = useCallback(
    ({item}) => {
      return <BookListItem {...item} color={color} onPress={onPressItem} />
    },
    [onPressItem],
  )

  const ListComponent = inBottomSheet
    ? StyledBottomSheetFlatList
    : StyledFlatList

  return (
    <ListComponent
      contentInsetAdjustmentBehavior="automatic"
      scrollEventThrottle={16}
      data={BOOKS}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      pt="sm"
      ListHeaderComponent={headerComponent}
    />
  )
}

export default BookList
