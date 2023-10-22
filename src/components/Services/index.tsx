import { Button, Flex, Stack, Title, Image, Text } from '@mantine/core';
import { useIsMobile } from '../../hooks/useIsMobile';
import classes from './style.module.css';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Services() {
  const isMobile = useIsMobile();
  return (
    <Flex
      justify={'space-between'}
      direction={isMobile ? 'column' : 'row'}
      align={'center'}
      gap={40}
      mt={isMobile ? 50:96}
    >
      <Image src={'/Illustration 2.png'} maw={508} />
      <Stack gap={20}>
        <Title className={classes.title}>
          We Provide Many Features You Can Use
        </Title>
        <Text className={classes.text}>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </Text>
        <Stack gap={15}>
          <Flex gap={10}>
            <BsFillCheckCircleFill color={'#2FAB73'} size={24} />
            <Text className={classes.attribute}>
              Powerfull online protection.
            </Text>
          </Flex>
          <Flex gap={10}>
            <BsFillCheckCircleFill color={'#2FAB73'} size={24} />
            <Text className={classes.attribute}>Internet without borders.</Text>
          </Flex>
          <Flex gap={10}>
            <BsFillCheckCircleFill color={'#2FAB73'} size={24} />
            <Text className={classes.attribute}>Supercharged VPN</Text>
          </Flex>
          <Flex gap={10}>
            <BsFillCheckCircleFill color={'#2FAB73'} size={24} />
            <Text className={classes.attribute}>No specific time limits.</Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Services;
