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
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { Contact } from './pages/Contact';

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
            <Route path="profile" element={<Profile authorized={false} />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
      </UserProvider>
      </Container>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
