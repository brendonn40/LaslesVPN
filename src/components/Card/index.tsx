import { Avatar, Flex, Paper, Text } from '@mantine/core';
import classes from './style.module.css';
import { AiFillStar } from 'react-icons/ai';
function FeedbackCard({
  image,
  name,
  region,
  rating,
  feedback,
}: {
  image: string;
  name: string;
  region: string;
  rating: number;
  feedback: string;
}) {
  return (
    <Paper className={classes.card}>
      <Flex justify={'space-between'}>
        <Flex gap={20} >
          <Avatar src={image} />
          <div >
            <Text className={classes.name}>{name}</Text>
            <Text className={classes.region}>{region}</Text>
          </div>
        </Flex>
        <Flex gap={10}>
          <Text className={classes.rating}>{rating}</Text>
          <AiFillStar color="#FEA250" size={16} />
        </Flex>
      </Flex>
      <Text className={classes.feedback} mt={20}>{feedback}</Text>
    </Paper>
  );
}

export default FeedbackCard;
