/* eslint-disable no-unused-vars */
import React from "react";
import { getInitialData } from "../utils/index"
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";
import autoBind from "auto-bind"
import { VStack, HStack, Heading, Text } from "@chakra-ui/react";
import ModalButton from './ModalButton'

export default class NoteApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: getInitialData(),
      archivedNote: []
    }

    autoBind(this)
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    const archivedNote = this.state.archivedNote.filter(note => note.id !== id)

    this.setState({
      notes,
      archivedNote
    });
  }

  onArchiveHandler(id) {
    const updatedNote = this.state.notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note
    })

    const notes = updatedNote.filter(note => note.archived !== true)

    const archivedNote = updatedNote.filter(note => note.archived === true)

    this.setState({
      notes,
      archivedNote: [...this.state.archivedNote, ...archivedNote],
    });
  }

  onUnarchiveHandler(id) {
    const nowNotes = [...this.state.notes, ...this.state.archivedNote]
    const updatedNote = nowNotes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived,
        }
      }
      return note
    })

    const archivedNote = updatedNote.filter(note => note.archived === true)
    const unarchivedNote = updatedNote.filter(note => note.archived === false)

    this.setState({
      notes: unarchivedNote,
      archivedNote
    });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false
          }
        ]
      }
    })
  }

  onSearchNoteHandler(title) {
    let result;

    if (title === "") {
      result = getInitialData();
    } else {
      result = this.state.notes.filter(note => note.title.includes(title));
    }

    this.setState({
      notes: result
    });
  }


  render() {
    return (
      <VStack p={5}>
        <HStack alignItems={'center'} my={3}>
          <Heading width={'full'} as='h1' color={'gray.400'} align={'center'}>Notes list</Heading>
          <NoteSearch searchNote={this.onSearchNoteHandler} />
        </HStack>
        <ModalButton addNote={this.onAddNoteHandler} />
        {this.state.notes.length !== 0 ? (<NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchiveHandler={this.onUnarchiveHandler} />) : (<Text color={'red.500'} size={'md'} fontWeight={'bold'}>no notes</Text>)}
        <Heading width={'full'} as='h1' color={'gray.400'} align={'center'}>Archived Notes</Heading>
        {this.state.archivedNote.length !== 0 ? (<NoteList notes={this.state.archivedNote} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchiveHandler={this.onUnarchiveHandler} />) : (<Text color={'red.500'} size={'md'} fontWeight={'bold'}>no notes</Text>)}
      </VStack>
    )
  }
}
