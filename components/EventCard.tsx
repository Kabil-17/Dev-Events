"use client"
import Image from "next/image"
import Link from "next/link"
import posthog from "posthog-js"

interface Props {
  title: string
  clasName?: string
  image: string
  date: string
  slug: string
  location: string
}

const EventCard = ({ title, image, date, slug, location }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card" onClick={() => posthog.capture("event_card_clicked", { event_title: title, event_location: location, event_date: date, event_slug: slug })}>
      <Image src={image} alt={title} width={410} height={300} className="poster" />

      <div className="flex flex-row gap-2">
        <Image src="/icons/pin.svg" alt="location" width={14} height={14} />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard