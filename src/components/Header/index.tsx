import {
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Image,
  Flex,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './style.module.css';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Flex gap={10} justify={'center'} align={'center'}>
            <Image src="/logo.svg" />
            <Text fw={500} c={'#0B132A;'} fz={20}>
              Lasles<strong>VPN</strong>
            </Text>
          </Flex>

          <Group h="100%" gap={40} visibleFrom="sm">
            <a href="#" className={classes.link}>
              About
            </a>

            <a href="#" className={classes.link}>
              Features
            </a>
            <a href="#" className={classes.link}>
              Pricing
            </a>
            <a href="#" className={classes.link}>
              Testimonials
            </a>
            <a href="#" className={classes.link}>
              Help
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant='subtle' color='#0B132A' fw={500} fz={16} >Sign In</Button>
            <Button variant='outline' radius={'xl'} color='#F53855' fz={16} fw={500}>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="LaslesVPN"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
              About
            </a>

            <a href="#" className={classes.link}>
              Features
            </a>
            <a href="#" className={classes.link}>
              Pricing
            </a>
            <a href="#" className={classes.link}>
              Testimonials
            </a>
            <a href="#" className={classes.link}>
              Help
            </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
          <Button variant='subtle' color='#0B132A' fw={500} fz={16} >Sign In</Button>
            <Button variant='outline' radius={'xl'} color='#F53855' fz={16} fw={500}>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
