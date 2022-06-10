import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Container fixed>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      </Container>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
