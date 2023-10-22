import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size={'lg'}>
        <Header />
        <Hero />
        <Services/>
      </Container>
    </MantineProvider>
  );
}
