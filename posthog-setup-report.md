<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the DevEvent Next.js 16.2.6 App Router project. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new): Initialises PostHog client-side using the `instrumentation-client.ts` approach recommended for Next.js 15.3+. Includes exception capture for error tracking and debug mode in development.
- **`next.config.ts`**: Added reverse-proxy rewrites so all PostHog requests route through `/ingest/*` on the same domain, improving ad-blocker resilience and performance.
- **`.env.local`**: Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables (never committed to source control).
- **`components/ExploreBtn.tsx`**: Made client component; captures `explore_events_clicked` when user clicks the "Explore Events" CTA button.
- **`components/EventCard.tsx`**: Made client component; captures `event_card_clicked` with `event_title`, `event_location`, `event_date`, and `event_slug` properties when a user clicks any event card.
- **`components/Navbar.tsx`**: Made client component; captures `nav_link_clicked` with `link_label` and `link_href` properties on every nav link click.
- **`app/page.tsx`**: Converted to client component; captures `featured_events_viewed` with `event_count` property on mount — marks the top of the event discovery funnel.

## Events

| Event | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicked the "Explore Events" CTA button on the home page | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicked on an event card. Properties: `event_title`, `event_location`, `event_date`, `event_slug` | `components/EventCard.tsx` |
| `nav_link_clicked` | User clicked a navigation link. Properties: `link_label`, `link_href` | `components/Navbar.tsx` |
| `featured_events_viewed` | User viewed the featured events section — top of the discovery funnel. Properties: `event_count` | `app/page.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1630683)
- [Event card clicks over time](/insights/UNTetvs5) — daily trend of event card click volume
- [Most clicked events](/insights/cx2PdOJP) — which events attract the most clicks, broken down by title
- [Explore Events CTA clicks](/insights/Ruv1xVLk) — daily trend of "Explore Events" button usage
- [Discovery funnel: View to Click](/insights/ZZkFcpT7) — conversion from featured events view to event card click
- [Nav link clicks by destination](/insights/ZjNpFSFa) — which nav links users click most

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
