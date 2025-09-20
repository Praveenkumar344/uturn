import { useEffect, useState } from 'react'


export default function Spinner() {
const [hide, setHide] = useState(false)
useEffect(() => {
const t = setTimeout(() => setHide(true), 400)
return () => clearTimeout(t)
}, [])
return (
<div className={`fixed inset-0 z-[9999] grid place-items-center bg-white transition ${hide ? 'spinner-leave' : 'spinner-enter'}`}>
<div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
</div>
)
}