import { useEffect } from 'react'

import pick from './utils/pick'

const useEffectEnhancer = (effect, deps) => (props = {}) => {
    const effectDeps = pick(deps, props)
    useEffect(() => effect(props), effectDeps)

    return { ...props }
}

export default useEffectEnhancer
