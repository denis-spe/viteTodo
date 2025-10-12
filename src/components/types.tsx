// Great is the LORD our GOD

import type { ReactNode } from "react"

/**
 * Todo activate
 */
export interface ActivateType {
    type: "add" | "remove" | "modify"
    id: number
    title: string
    done: boolean
}


/**
 * Array of activates
 */
export type ActivateArrayType = Array<ActivateType>

/**
 * Todo context type
 */
export type TodoContextType = {
    state: ActivateArrayType,
    dispatch: (activate: ActivateType) => void
}

/**
 * Todo provider property or prop
 */
export type TodoProviderPropType = {
    children: ReactNode
}