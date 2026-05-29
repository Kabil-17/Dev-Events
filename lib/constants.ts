export type EventItem = {
    image: string
    title: string
    slug: string
    location: string
    date : string
    time: string
    url?: string
}

export const events:EventItem[] = [
  {
    title: "Google I/O 2025",
    date: "May 20-21, 2025",
    time: "10:00 AM PDT",
    location: "Mountain View, CA",
    slug: "google-io-2025",
    image: "/images/event1.png",
    url: "https://io.google",
  },
  {
    title: "JS Nation 2025",
    date: "June 12-16, 2025",
    time: "9:00 AM CET",
    location: "Amsterdam, Netherlands",
    slug: "js-nation-2025",
    image: "/images/event2.png",
    url: "https://jsnation.com",
  },
  {
    title: "React Summit 2025",
    date: "June 13-17, 2025",
    time: "9:00 AM CET",
    location: "Amsterdam, Netherlands",
    slug: "react-summit-2025",
    image: "/images/event3.png",
    url: "https://reactsummit.com",
  },
  {
    title: "MLH Global Hackathon",
    date: "July 5-7, 2025",
    time: "12:00 PM UTC",
    location: "Online / Worldwide",
    slug: "mlh-global-hackathon-2025",
    image: "/images/event4.png",
    url: "https://mlh.io",
  },
  {
    title: "GitHub Universe 2025",
    date: "October 28-29, 2025",
    time: "9:00 AM PDT",
    location: "San Francisco, CA",
    slug: "github-universe-2025",
    image: "/images/event5.png",
    url: "https://githubuniverse.com",
  },
  {
    title: "PyCon US 2025",
    date: "May 14-22, 2025",
    time: "8:00 AM EDT",
    location: "Pittsburgh, PA",
    slug: "pycon-us-2025",
    image: "/images/event6.png",
    url: "https://us.pycon.org",
  },
  {
    title: "DevFest Chennai 2025",
    date: "August 10, 2025",
    time: "10:00 AM IST",
    location: "Chennai, India",
    slug: "devfest-chennai-2025",
    image: "/images/event1.png",
    url: "https://gdg.community.dev",
  },
  {
    title: "AWS re:Invent 2025",
    date: "December 1-5, 2025",
    time: "8:00 AM PST",
    location: "Las Vegas, NV",
    slug: "aws-reinvent-2025",
    image: "/images/event3.png",
    url: "https://reinvent.awsevents.com",
  },
];