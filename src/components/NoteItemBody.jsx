/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function NoteItemBody({ body }) {
  return(
    <Box overflow={'scroll'} maxW={'100%'} minH={'50%'} maxH={'50%'} border={'1px'} p={1} bg={'gray.100'} color={'gray.500'} borderRadius={5} borderStyle={'dotted'}>
      <Text >{body}</Text>
    </Box>  
  )
}

