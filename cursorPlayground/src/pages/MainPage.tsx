import { Flex, Title, Text } from '@mantine/core';

export function MainPage() {
  return (
    <Flex component="section" direction="column" gap="md">
      <Title order={1}>Main Page</Title>
      <Text>Welcome to the main page.</Text>
    </Flex>
  );
}
