/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItemTitle from "./NoteItemTitle";
import NoteItemBody from "./NoteItemBody";
import NoteItemAction from "./NoteItemAction";
import NoteItemDate from "./NoteItemDate";
import { VStack, Spacer } from "@chakra-ui/react";

export default function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, onUnarchiveHandler }) {
  return(
    <VStack border={'2px'} borderColor={'gray.400'} borderStyle={'dotted'} borderRadius={5} maxW={'25%'} h={'500px'} p={4}>
      <NoteItemTitle title={title} />
      <NoteItemDate date={createdAt} />
      <NoteItemBody body={body} />
      <Spacer />
      <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onUnarchiveHandler={onUnarchiveHandler}/>
    </VStack>
  )
}