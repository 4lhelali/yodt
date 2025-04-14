import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Event } from "@/server/db/schema";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const EventCard = (props: Event) => {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <h3 className="text-xl font-semibold text-primary">{props.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="mr-1 h-4 w-4" />
          {new Date(props.date).toLocaleString()} at {props.time}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center text-sm text-muted-foreground">
          <MapPinIcon className="mr-1 h-4 w-4" />
          {props.location}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="e-full" asChild>
          <Link href={`/events/${props.slug}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
