import { Button, Flex, Stack, Text } from '@mantine/core';
import classes from './style.module.css';
import { useIsMobile } from '../../hooks/useIsMobile';
function Subscribe() {
    const isMobile = useIsMobile();
  return (
    <Flex className={classes.box} gap={20}  direction={isMobile ?'column':'row'} justify={'space-between'} align={'center'} mt={65} mb={60}>
      <Stack gap={20}>
        <Text className={classes.title}>
          Subscribe Now for Get Special Features!
        </Text>
        <Text className={classes.text}>
          Let's subscribe with us and find the fun.
        </Text>
      </Stack>
      <Button className={classes.btn} size="xl" maw={250}>
      Subscribe Now
      </Button>
    </Flex>
  );
}

export default Subscribe;
