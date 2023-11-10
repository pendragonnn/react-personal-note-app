/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HStack } from "@chakra-ui/react";
import React from "react";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive, onUnarchiveHandler}) {
  return(
    <HStack my={3} wrap={'wrap'} justify={'center'} gap={3}>
      {
        notes.map((note) => (
          <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} onUnarchiveHandler={onUnarchiveHandler} {...note}  />
        ))
      }
    </HStack>  
  )
}
