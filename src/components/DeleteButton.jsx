/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@chakra-ui/react";
import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return(
    <>
      <Button bg={'red.300'} color={'white'} _hover={{ bg:'red.500'}} onClick={() => onDelete(id)}>Delete</Button>
    </>
  )
}