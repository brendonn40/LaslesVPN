import { Stack, Title, Text, Flex } from '@mantine/core';
import classes from './style.module.css';
import PlanCard from '../PlanCard';
import { useIsMobile } from '../../hooks/useIsMobile';
function ChosePlan() {
    const isMobile = useIsMobile();
  return (
    <Stack justify='center' align='center' mt={isMobile ? 40:80}>
      <Text className={classes.title}>Choose Your Plan</Text>
      <Text className={classes.text}>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </Text>
      <Flex gap={50} direction={isMobile ? 'column-reverse':'row'}>
        <PlanCard
          name="Free Plan"
          image="/Free.svg"
          resources={[
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
          ]}
          price='Free'
        />
        <PlanCard
          name="Standard Plan"
          image="/Standard.svg"
          resources={[
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anyware'
          ]}
          price='$9 / mo'
        />
        <PlanCard
          name="Premium Plan"
          image="/Premium.svg"
          resources={[
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anyware',
            'Get New Features'
          ]}
          price='$12 / mo'
          selected={true}
        />
      </Flex>
    </Stack>
  );
}

export default ChosePlan;
