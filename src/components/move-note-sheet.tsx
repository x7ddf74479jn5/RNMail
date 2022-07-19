import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react"
import RNBottomSheet, {BottomSheetBackdrop} from "@gorhom/bottom-sheet"
import BottomSheet from "@/components/bottom-seat"
import {Box, Text} from "@/atoms"
import BookList from "@/components/book-list"

interface MoveNoteSheetProps {
  onClose?: () => void
}

interface MoveNoteSheetHandle {
  show: () => void
}

const MoveNoteSheet = forwardRef<MoveNoteSheetHandle, MoveNoteSheetProps>(
  ({onClose}, ref) => {
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ["60%", "90%"], [])

    useImperativeHandle(ref, () => ({
      show: () => {
        const {current: bottomSheet} = refBottomSheet
        if (bottomSheet) {
          bottomSheet.snapToIndex(0)
        }
      },
    }))

    const handlePressItem = useCallback((bookId: string) => {
      const {current: bottomSheet} = refBottomSheet
      if (bottomSheet) {
        bottomSheet.close()
      }
    }, [])

    return (
      <BottomSheet
        ref={refBottomSheet}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        detached
        bottomInset={46}
        enablePanDownToClose
        style={{
          marginHorizontal: 12,
        }}
        onClose={onClose}>
        <BookList
          inBottomSheet
          onPressItem={handlePressItem}
          color="$foreground"
          headerComponent={() => (
            <Box justifyContent="center" alignItems="center">
              <Text fontWeight="bold">Move</Text>
            </Box>
          )}
        />
      </BottomSheet>
    )
  },
)

type MoveNoteSheet = MoveNoteSheetHandle

export default MoveNoteSheet
