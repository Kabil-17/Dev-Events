export type EventItem = {
    image: string
    title: string
    slug: string
    location: string
    date : string
    url?: string
}

export const events:EventItem[] = [
  {
    title: "Google I/O 2025",
    date: "May 20-21, 2025",
    location: "Mountain View, CA",
    slug:
      "Google's annual developer conference featuring the latest in Android, AI, web, and cloud technologies.",
    image: "/images/event1.png",
    url: "https://io.google",
  },
  {
    title: "JS Nation 2025",
    date: "June 12-16, 2025",
    location: "Amsterdam, Netherlands",
    slug:
      "The biggest JavaScript conference in Europe, covering frontend, backend, and full-stack JavaScript.",
    image: "/images/event2.png",
    url: "https://jsnation.com",
  },
  {
    title: "React Summit 2025",
    date: "June 13-17, 2025",
    location: "Amsterdam, Netherlands",
    slug:
      "The world's biggest React conference with workshops, talks, and networking for React developers.",
    image: "/images/event3.png",
    url: "https://reactsummit.com",
  },
  {
    title: "MLH Global Hackathon",
    date: "July 5-7, 2025",
    location: "Online / Worldwide",
    slug:
      "Major League Hacking's flagship global hackathon — 48 hours to build, learn, and connect with thousands of developers.",
    image: "/images/event4.png",
    url: "https://mlh.io",
  },
  {
    title: "GitHub Universe 2025",
    date: "October 28-29, 2025",
    location: "San Francisco, CA",
    slug:
      "GitHub's annual conference celebrating developer culture, open source, and the future of software development.",
    image: "/images/event5.png",
    url: "https://githubuniverse.com",
  },
  {
    title: "PyCon US 2025",
    date: "May 14-22, 2025",
    location: "Pittsburgh, PA",
    slug:
      "The largest annual gathering for the Python community, featuring talks, sprints, and open source collaboration.",
    image: "/images/event6.png",
    url: "https://us.pycon.org",
  },
  {
    title: "DevFest Chennai 2025",
    date: "August 10, 2025",
    location: "Chennai, India",
    slug:
      "Google Developer Group's annual DevFest in Chennai featuring sessions on Google technologies, AI, and web development.",
    image: "/images/event1.png",
    url: "https://gdg.community.dev",
  },
  {
    title: "AWS re:Invent 2025",
    date: "December 1-5, 2025",
    location: "Las Vegas, NV",
    slug:
      "Amazon Web Services' flagship conference with 60,000+ attendees, covering cloud, serverless, AI/ML, and DevOps.",
    image: "/images/event3.png",
    url: "https://reinvent.awsevents.com",
  },
];