import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ShellLayout } from './layouts/ShellLayout';

function App() {
  return (
    <MantineProvider>
      <ShellLayout />
    </MantineProvider>
  )
}

export default App
