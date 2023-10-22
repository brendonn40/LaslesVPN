import { Stack, Text } from '@mantine/core';
import classes from './style.module.css';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import FeedbackCard from '../Card';
import { useIsMobile } from '../../hooks/useIsMobile';
function Feedback() {
    const isMobile = useIsMobile();
  return (
    <Stack justify="center" align="center" gap={20} mt={125}>
      <Text className={classes.title}>
        Trusted by Thousands of Happy Customer
      </Text>
      <Text className={classes.text} mb={40}>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </Text>
      <Carousel slideSize={isMobile ? '100%':'33%'} loop slidesToScroll={isMobile ? 1:3} w={'100%'}>
          <Carousel.Slide>
            <FeedbackCard
              image="/person1.png"
              name="Viezh Robert"
              region="Warsaw, Poland"
              rating={4.5}
              feedback="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard
              image="/person2.png"
              name="Yessica Christy"
              region="Shanxi, China"
              rating={4.5}
              feedback="“I like it because I like to travel far and still can connect with high speed”."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard
              image="/person3.png"
              name="Kim Young Jou"
              region="Seoul, South Korea"
              rating={4.5}
              feedback="“This is very unusual for my business that currently requires a virtual private network that has high security”."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard
              image="/person1.png"
              name="Viezh Robert"
              region="Warsaw, Poland"
              rating={4.5}
              feedback="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard
              image="/person2.png"
              name="Yessica Christy"
              region="Shanxi, China"
              rating={4.5}
              feedback="“I like it because I like to travel far and still can connect with high speed”."
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard
              image="/person3.png"
              name="Kim Young Jou"
              region="Seoul, South Korea"
              rating={4.5}
              feedback="“This is very unusual for my business that currently requires a virtual private network that has high security”."
            />
          </Carousel.Slide>
      </Carousel>
    </Stack>
  );
}

export default Feedback;
