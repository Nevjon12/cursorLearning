import { Flex, Title, Text } from '@mantine/core';

export function AboutMePage() {
  return (
    <Flex component="section" direction="column" gap="md" aria-label="About Me">
      <Title order={1}>About Me</Title>
      <Text>Learn more about me.</Text>
    </Flex>
  );
}
