// Holy is the LORD of hosts

import type { ActivateArrayType, TodoContextType } from "./types";

/**
 * Context default input data
 */
export const contextDefaultData: TodoContextType = {
    activates: [],
    modification: () => {}
}

/**
 * Todo activates data
 */
export const initialActivates: ActivateArrayType = [
    {
        title: "Clean up the home",
        done: false
    }
]