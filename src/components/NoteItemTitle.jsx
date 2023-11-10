/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function NoteItemTitle({ title }) {
  return(
    <Box display={'flex'} minH={'20%'} maxW={'80%'} alignItems={'center'}>
      <Heading   size={'md'} color={'blue.200'} align={'center'} p={1} border={'1px'} shadow={'base'} >
        {title}
      </Heading>  
    </Box>
  )
}