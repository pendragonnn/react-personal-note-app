/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Center, Text } from "@chakra-ui/react";
import React from "react";
import { showFormattedDate } from "../utils";

export default function NoteItemDate({ date }) {
  return (
    <Center>
      <Text color={'yellow.200'} fontWeight={'bold'} align={'left'}>Posted on: {showFormattedDate(date)}</Text>
    </Center>  
  )
}