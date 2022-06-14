import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { UserProvider } from './providers/UserProvider';

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Container fixed>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
      </UserProvider>
      </Container>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
