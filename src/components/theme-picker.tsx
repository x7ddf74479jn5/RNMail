import activeThemeId from "@/states/theme"
import {useAtom} from "jotai"
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react"
import RNBottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet"
import ThemeListItem from "@/components/theme-list-item"
import BottomSheet from "@/components/bottom-seat"
import {Box, Text} from "@/atoms"
import {ThemeMeta, themes} from "@/themes"

interface ThemePickerProps {}

interface ThemePickerHandle {
  show: () => void
}

const ThemePicker = forwardRef<ThemePickerHandle, ThemePickerProps>(
  (_props, ref) => {
    const [, setActiveTheme] = useAtom(activeThemeId)
    const refBottomSheet = useRef<RNBottomSheet>(null)
    const snapPoints = useMemo(() => ["40%", "90%"], [])

    useImperativeHandle(ref, () => ({
      show: () => {
        const {current: bottomSheet} = refBottomSheet
        if (bottomSheet) {
          bottomSheet.snapToIndex(0)
        }
      },
    }))

    const renderThemeItem = useCallback(({item}) => {
      return <ThemeListItem theme={item} onPress={setActiveTheme} />
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
        style={{marginHorizontal: 12}}>
        <BottomSheetFlatList
          ListEmptyComponent={() => (
            <Box p="lg" alignItems="center">
              <Text fontWeight="bold"></Text>
              Change Theme
            </Box>
          )}
          data={themes}
          keyExtractor={(t: ThemeMeta) => t.id}
          renderItem={renderThemeItem}
        />
      </BottomSheet>
    )
  },
)

type ThemePicker = ThemePickerHandle

export default ThemePicker
