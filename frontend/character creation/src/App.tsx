import CharacterForm from './characterCreationForm/characterForm';
import { MantineProvider} from '@mantine/core';


function App() {
  return (
    <MantineProvider>
       <div />
       <CharacterForm />
       <div/>
            
    </MantineProvider>
  );
}

export default App;
