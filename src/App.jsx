import '../src/styles/style.css'
import NoteApp from './components/NoteApp'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
    <ChakraProvider>
      <NoteApp />
    </ChakraProvider>
    </>
  )
}

export default App
