import { Text, Container, Flex, Image } from '@mantine/core';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Product',
    links: [
      { label: 'Download ', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Locations', link: '#' },
      { label: 'Server', link: '#' },
      { label: 'Countries', link: '#' },
      { label: 'Blog', link: '#' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { label: 'LaslesVPN ? ', link: '#' },
      { label: 'FAQ', link: '#' },
      { label: 'Tutorials', link: '#' },
      { label: 'About Us', link: '#' },
      { label: 'About Us', link: '#' },
      { label: 'Privacy Policy', link: '#' },
      { label: 'Terms of Service', link: '#' },
    ],
  },
  {
    title: 'Earn Money',
    links: [
      { label: 'Affiliate', link: '#' },
      { label: 'Become Partner', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={'xl'} className={classes.inner}>
        <Flex direction={'column'}>
        <Flex gap={10}  align={'center'}>
            <Image src="/logo.svg" />
            <Text fw={500} c={'#0B132A;'} fz={20}>
              Lasles<strong>VPN</strong>
            </Text>
          </Flex>
          <Text size="xs" className={classes.description} mt={22}>
          <strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.
          </Text>
          <Text size="sm" className={classes.description} mt={30}>
            ©LaslesVPN 2023. All rights reserved.
          </Text>
        </Flex>

        <div className={classes.groups}>{groups}</div>
      </Container>

    </footer>
  );
}
