/* eslint-disable react/prop-types */
import React from "react";
import {  InputGroup, InputLeftElement, Input, } from "@chakra-ui/react";
import { SearchIcon  } from '@chakra-ui/icons'
import autoBind from "auto-bind";

export default class NoteSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      input: ''
    }

    autoBind(this)
  }

  onInputChangeEventHandler(event) {
    const input = event.target.value
    this.setState({ input })
    this.props.searchNote(input)
  }

  render() {
    return (
      <>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input placeholder="search note" onChange={this.onInputChangeEventHandler} />
        </InputGroup>
      </>
    )
  }
}