import { useMemo } from 'react'
import { combineClassNames } from 'helpers/operations/commons'

export const useMemoizedCombinedClassNames = (
    list: ReadonlyArray<string | undefined>, 
    deps: ReadonlyArray<unknown>
) => {
    return useMemo(() => combineClassNames(...list), deps)
}