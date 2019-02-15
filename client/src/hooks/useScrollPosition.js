import React, {useState, useEffect, useRef} from 'react'

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const scrollY = window.screenY
    const currentScrollPosition = useRef(scrollY)
    window.addEventListener('scroll', () => {
      if(scrollY > scrollPosition) {
        setScrollPosition(0)
        window.scrollTo(0, scrollPosition)
      }
    })
  }, [])

  return [scrollPosition, currentScrollPosition]
}