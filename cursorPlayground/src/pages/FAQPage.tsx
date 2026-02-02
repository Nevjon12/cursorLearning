import { Flex, Title, Text } from '@mantine/core';

export function FAQPage() {
  return (
    <Flex component="section" direction="column" gap="md" aria-label="FAQ">
      <Title order={1}>FAQ Page</Title>
      <Text>Frequently Asked Questions</Text>
    </Flex>
  );
}
