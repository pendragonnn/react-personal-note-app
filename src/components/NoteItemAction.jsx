/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import DeleteButton from "./DeleteButton";
import ArchieveButton from "./ArchieveButton";
import { HStack } from "@chakra-ui/react";


export default function NoteItemAction({ id, archived, onDelete, onArchive, onUnarchiveHandler }) {
  return (
    <HStack>
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchieveButton id={id} onArchive={onArchive} archived={archived} onUnarchiveHandler={onUnarchiveHandler}/>
    </HStack>
  )
}