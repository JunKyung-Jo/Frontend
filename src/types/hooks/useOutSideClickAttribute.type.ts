import { Dispatch, SetStateAction } from "react";

export type UseOutSideClickAttribute = (
  element: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];
