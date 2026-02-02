import { Flex, Title, Text } from '@mantine/core';

export function SettingsPage() {
  return (
    <Flex component="section" direction="column" gap="md">
      <Title order={1}>Settings</Title>
      <Text>Settings go here</Text>
    </Flex>
  );
}
