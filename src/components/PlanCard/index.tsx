import { Stack, Text, Button, Flex, Image } from '@mantine/core';
import classes from './style.module.css';
import { AiOutlineCheck } from 'react-icons/ai';

function PlanCard({
  name,
  image,
  resources,
  price,
  selected = false,
}: {
  name: string;
  image: string;
  resources: string[];
  price: string;
  selected?: boolean;
}) {
  return (
    <Stack
      className={classes.plan}
      style={{ border: selected ? '2px solid #f53838' : '2px solid #ddd' }}
      justify="space-around"
      align="center"
    >
      <Image h={165} w={144} src={image} mt={80} />
      <Text className={classes.planName}>{name}</Text>
      <Stack gap={10}>
        {resources.map((item) => (
          <Flex gap={20}>
            <AiOutlineCheck color="#2FAB73" size={24} />
            <Text className={classes.attribute}>{item}</Text>
          </Flex>
        ))}
      </Stack>
      <Stack gap={33}>
        <Text className={classes.price}>{price}</Text>
        <Button variant={selected ? 'filled':'outline'} color="#F53838" size="lg" radius={'xl'} mb={50}>
          Select
        </Button>
      </Stack>
    </Stack>
  );
}

export default PlanCard;
