import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
// import { useEffect } from 'react'
// import posthog from 'posthog-js'
import { IEvent } from '@/database/event.model'
// import { cacheLife } from 'next/cache';


import { Event } from "@/database";
import connectDB from "@/lib/mongodb";

const Page = async () => {
  await connectDB();
  const rawEvents = await Event.find().sort({ createdAt: -1 }).lean();

  const events = rawEvents.map(e=>({
    ...e,
    _id: e._id.toString()
  }))


  // useEffect(() => {
  //   posthog.capture("featured_events_viewed", { event_count: events.length })
  // }, [])

  return (
    <section>
      <h1 className="text-center">The Hub for Every Dev <br/> Event You Can&apos;t Miss</h1>
      <p className="text-center mt-5">Hackathons,Meetups and Conference, All in One Place</p>

      <ExploreBtn/>

      <div className="mt-20 space-y-7">
        <h3>Feature Events</h3>
        <ul className="events">
          {
          events && events.length > 0 && events.map((event: IEvent)=>(
            <li key={event.title}>
              <EventCard {...event}/>
            </li>
          ))
        }
        </ul>
      </div>

    </section>
  )
}

export default Page