import {Box, Text, TouchableOpacity} from "@/atoms"
import FeatherIcon from "@/components/icon"
import activeThemeId from "@/states/theme"
import {ThemeMeta, ThemeNames} from "@/themes"
import {useAtom} from "jotai"
import {selectAtom} from "jotai/utils"
import React, {useCallback, useMemo} from "react"

interface ThemeListItemProps {
  theme: ThemeMeta
  onPress: (themeId: ThemeNames) => void
}

const ThemeListItem: React.FC<ThemeListItemProps> = ({theme, onPress}) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme]),
  )
  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress, theme])

  return (
    <TouchableOpacity
      minHeight={44}
      flexDirection="row"
      alignItems="center"
      px="lg"
      onPress={handlePress}>
      <Box justifyContent="center" alignItems="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text color="$sidebarForeground">{theme.name}</Text>
    </TouchableOpacity>
  )
}

export default ThemeListItem
