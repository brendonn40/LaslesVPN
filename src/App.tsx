import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { Header } from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ChosePlan from './components/ChoosePlan';
import Global from './components/Global';
import Feedback from './components/Feedback';
import Subscribe from './components/Subsribe';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Container size={'lg'}>
        <Header />
        <Hero />
        <Services />
        <ChosePlan />
        <Global />
      </Container>
      <Container size={'xl'}>
        <Feedback />
      </Container>
      <Container size={'lg'}>
        <Subscribe />
      </Container>
      <Footer/>
    </MantineProvider>
  );
}
