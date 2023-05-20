import { atom } from "jotai";



export const headerTextAtom = atom("headerText")
export const textAtom = atom("This is the normal text you will see")
export const buttonTextAtom = atom("headerText")
export const modalOpenAtom = atom(false)

export const snackBarOpenAtom  = atom(false)
export const snackBarMessageAtom  = atom("Null")
export const snackBarSeverityAtom  = atom("success")
