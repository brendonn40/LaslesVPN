import { Stack, Text, Image, Flex } from '@mantine/core';
import classes from './style.module.css';
import { useIsMobile } from '../../hooks/useIsMobile';
function Global() {
    const isMobile = useIsMobile();
  return (
    <Stack gap={20} align='center' mt={isMobile ? 40:150}>
      <Text className={classes.title}>Huge Global Network of Fast VPN</Text>
      <Text className={classes.text} mb={isMobile ? 30:135}>See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.</Text>
      <Image src={'/Huge Global.png'} maw={1060}/>
      <Flex gap={20} direction={isMobile ? 'column':'row'} justify={'space-around'} mt={isMobile ?  20: 109}>
        <Image w={190} h={60} src={'/Mask Group.png'} />
        <Image w={190} h={60} src={'/Mask Group-1.png'} />
        <Image w={190} h={60} src={'/Mask Group-3.png'} />
        <Image w={190} h={60} src={'/Mask Group-4.png'} />
      </Flex>
    </Stack>
  );
}

export default Global;
