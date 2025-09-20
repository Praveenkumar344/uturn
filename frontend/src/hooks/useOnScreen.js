import { useEffect, useRef, useState } from 'react'


export default function useOnScreen(options = { threshold: 0.2 }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)


    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true)
        }, options)
        obs.observe(el)
        return () => obs.disconnect()
    }, [options])


    return [ref, visible]
}