import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";
import Link from "next/link";
import { db } from "@/server/db";
import { events } from "@/server/db/schema";
import DeleteButton2 from "@/components/ui/deleteButtonFEvent";

const EventsPage = async () => {
  const allEvents = await db.select().from(events);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="mb-6 text-3xl font-bold">Events</h1>
        <Button className="flex items-center" asChild>
          <Link href="/dashboard/events/create">
            <Plus className="mr-2 h-4 w-4" />
            <span>Create Event</span>
          </Link>
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px] cursor-pointer">Title</TableHead>
              <TableHead className="w-[100px] cursor-pointer">Date</TableHead>
              <TableHead className="w-[100px]">Time</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>
                  {new Date(event.date).toLocaleDateString()}
                </TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {event.location}
                </TableCell>
                <TableCell>
                <div className="flex space-x-2">
                    <DeleteButton2 eventId={event.id} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EventsPage;
