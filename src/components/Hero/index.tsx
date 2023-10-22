import {
  Flex,
  Stack,
  Title,
  Text,
  Button,
  Image,
  Divider,
} from '@mantine/core';
import classes from './style.module.css';
import { useIsMobile } from '../../hooks/useIsMobile';
import { FaUser } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import { BiSolidServer } from 'react-icons/bi';
function Hero() {
  const isMobile = useIsMobile();
  return (
    <div>
      <Flex justify={'space-around'} direction={isMobile ? 'column' : 'row'} gap={40}>
        <Stack gap={20}>
          <Title className={classes.title}>
            Want anything to be easy with <strong>LaslesVPN.</strong>
          </Title>
          <Text className={classes.text}>
            Provide a network for all your needs with ease and fun using{' '}
            <strong>LaslesVPN</strong> discover interesting features from us.
          </Text>
          <Button className={classes.btn} size="xl" maw={250}>
            Get Started
          </Button>
        </Stack>
        <Image src={'/Illustration 1.png'} maw={611} />
      </Flex>
      <Flex
        className={classes.box}
        direction={isMobile ? 'column' : 'row'}
        justify={'space-around'}
        align={isMobile ? 'baseline' : 'center'}
        mt={isMobile ? 20:104}
      >
        <Flex gap={36.5} justify={'center'} align={'center'} >
            
          <div className={classes.circle}>
            <FaUser color={'#F53838'} size={24} />
          </div>
          <Stack>
            <Text className={classes.number}>90+</Text>
            <Text className={classes.attribute}>Users</Text>
          </Stack>
          <Divider
            h={125}
            orientation={isMobile ? 'horizontal' : 'vertical'}
            ml={129}
          />
        </Flex>
        <Flex gap={36.5} justify={'center'} align={'center'} >
          <div className={classes.circle}>
            <MdLocationPin color={'#F53838'} size={24} />
          </div>
          <Stack>
            <Text className={classes.number}>30+</Text>
            <Text className={classes.attribute}>Locations</Text>
          </Stack>
          <Divider
            h={125}
            orientation={isMobile ? 'horizontal' : 'vertical'}
            ml={129}
          />
        </Flex>
        <Flex gap={36.5} justify={'center'} align={'center'} >
          <div className={classes.circle}>
            <BiSolidServer color={'#F53838'} size={24} />
          </div>
          <Stack>
            <Text className={classes.number}>50+</Text>
            <Text className={classes.attribute}>Servers</Text>
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}

export default Hero;
