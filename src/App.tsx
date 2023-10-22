import "@mantine/core/styles.css";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./components/Header";

export default function App() {
  return <MantineProvider theme={theme}>
    <Container size={'xl'}>
    <Header/>

    </Container>
    </MantineProvider>;
}
