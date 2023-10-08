import { Container } from '@mui/material';
import './App.scss';
import Books from './components/books/Books';
import Header from './components/Header';
import { TextField } from '@mui/material';

const  App:React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className='header'></div>
        <Books />
      </Container>
    </>
  );
}

export default App;
