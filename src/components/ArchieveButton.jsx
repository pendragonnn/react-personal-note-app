/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import React from "react";

export default function ArchieveButton({id, onArchive, archived, onUnarchiveHandler}) {
  return(
    <>
    { !archived ?
      <Button bg={'yellow.200'} color={'white'} _hover={{ bg:'yellow.300'}} onClick={() => onArchive(id)}>Archive</Button> :
      <Button bg={'blue.200'} color={'white'} _hover={{ bg:'blue.300'}} onClick={() => onUnarchiveHandler(id)}>Unarchive</Button>
    }
    </>
  )
}