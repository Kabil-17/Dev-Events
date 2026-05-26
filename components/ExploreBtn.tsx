"use client"
import Image from "next/image"

interface ComponentProps {
    className?: string
    id?: string
    OnClick?: ()=> void

    src?: string
}

const ExploreBtn = ({className,OnClick,src,id}:ComponentProps) => {
  return (
    <button type="button" id="explore-btn"
    className="mt-7 mx-auto">
        <a href="#event">
            Explore Events
            <Image alt="arrow-down" src="/icons/arrow-down.svg" width={20} height={20}/>
        </a>
    </button>
  )
}

export default ExploreBtn