import { Metadata } from "next";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "../NoteDetails.client";
import { fetchNoteById } from "@/lib/api";

export const metadata: Metadata = {
  title: "Note Details - NoteHub",
  description: "Detailed view of a single note in NoteHub application",
};

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) throw new Error("Invalid note ID");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient id={id} />
    </HydrationBoundary>
  );
}
