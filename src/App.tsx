import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import User from './components/User';
import Home from './pages/Home';
import { Container } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container fixed>
        <Home/>
        <User/>
      </Container>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
