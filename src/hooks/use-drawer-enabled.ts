import {searchInputHasFocusAtom} from "@/states/serch-bar"
import {useAtom} from "jotai"

export const useDrawerEnabled = () => {
  const [searchInputHasFocus] = useAtom(searchInputHasFocusAtom)
  return !searchInputHasFocus
}
