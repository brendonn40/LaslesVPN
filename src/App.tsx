import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Header } from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size={'xl'}>
        <Header />
        <Hero />
      </Container>
    </MantineProvider>
  );
}
