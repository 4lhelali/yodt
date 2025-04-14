import { db } from "@/server/db";
import EventCard from "@/components/common/EventCard";
import { events } from "@/server/db/schema";
import { asc } from "drizzle-orm";

const BlogEvents = async () => {

      const recentEvents = await db
        .select()
        .from(events)
        .orderBy(asc(events.date))

    return(
        <section className="mx-auto max-w-7xl py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-primary font-serif">
           Events
        </h2>
        <div className="mx-auto h-1 w-24 bg-secondary"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {recentEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
    )
}

export default BlogEvents;