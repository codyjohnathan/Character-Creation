import CharacterForm from './characterCreationForm/characterForm';
import { MantineProvider} from '@mantine/core';


function App() {
  return (
    <MantineProvider>
       <CharacterForm />
    </MantineProvider>
  );
}

export default App;
