import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/server/db";
import { events } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { notFound } from "next/navigation";

const EventPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const eventResult = await db
    .select()
    .from(events)
    .where(eq(events.slug, slug));

  if (eventResult.length === 0) notFound();

  const event = eventResult[0];

  if (!event) notFound();

  return (
    <div className="container mx-auto my-8 min-h-[500px] px-4 py-8">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            {event.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-muted-foreground">
              <CalendarIcon className="mr-2 h-5 w-5" />
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-muted-foreground">
              <ClockIcon className="mr-2 h-5 w-5" />
              {event.time}
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPinIcon className="mr-2 h-5 w-5" />
              {event.location}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-semibold">About the Event</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventPage;
