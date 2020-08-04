import { RootState } from "./types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
// to get types inside useSelector by default; so we don't have to use types everywhere else
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
