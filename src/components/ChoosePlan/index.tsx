import { Stack, Title, Text, Flex } from '@mantine/core';
import classes from './style.module.css';
import PlanCard from '../PlanCard';
function ChosePlan() {
  return (
    <Stack justify='center' align='center'>
      <Title className={classes.title}>Choose Your Plan</Title>
      <Text className={classes.text}>
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </Text>
      <Flex gap={50}>
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
