/* eslint-disable react/prop-types */
import { Input, Textarea, Text, Button, ModalFooter, Heading } from "@chakra-ui/react";
import React from "react";
import autoBind from "auto-bind";

export default class NoteInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      limit: 50
    }

    autoBind(this)
  }

  onTitleChangeEventHandler(event) {
    const limitBody = 50
    if(event.target.value.length > limitBody) return;

    this.setState(() => {
      return {
        title: event.target.value,
        limit: limitBody - event.target.value.length
      }
    })
  }
  
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state)
  }

  render() {
    return(
      <form onSubmit={this.onSubmitEventHandler}>
        <Heading size={'md'} color={'blue.300'}>Tambah Catatan</Heading>
        <Text color={'red.200'} float={'right'}>limit: {this.state.limit}</Text>
        <Input variant={'flushed'} focusBorderColor="blue.200" required my={1} type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
        <Textarea resize={'none'} variant={'flushed'} focusBorderColor="blue.200" required my={2} placeholder="Description" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
        
        <ModalFooter gap={3}>
          <Button colorScheme={'yellow'} color={'white'} onClick={this.state.title && this.state.body ? this.props.onClose : null} type="submit">
            Add
          </Button>
          <Button colorScheme='blue' onClick={this.props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </form>  
    )
  }
}