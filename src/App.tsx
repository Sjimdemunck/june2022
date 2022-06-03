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
import User from './Components/User';
import { Container } from '@mui/material';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
          <User/>
      </Container>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
