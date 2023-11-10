/* eslint-disable react/prop-types */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from '@chakra-ui/react'
import NoteInput from './NoteInput'
import { useDisclosure } from '@chakra-ui/react'

export default function BasicUsage({ addNote }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button color={'white'} bg={'blue.300'} _hover={{ bg:'blue.400' }} onClick={onOpen}>Add Note</Button>
      <Modal isOpen={isOpen} onClose={onClose} pt={3}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton bg={'red.300'} color={'white'} _hover={{ bg: 'red.400' }} />
          <ModalBody>
            <Box border={'1px'} borderStyle={'dotted'} borderRadius={5} borderColor={'blue.200'} p={5} my={3}>
              <NoteInput addNote={addNote} onClose={onClose} />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}