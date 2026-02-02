import { Flex, Title, Text, Avatar, Paper, Stack, Group } from '@mantine/core';

const MOCK_USER = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  role: 'Member',
  joined: 'January 2024',
};

export function ProfilePage() {
  return (
    <Flex component="section" direction="column" gap="md" aria-label="Profile">
      <Title order={1}>Profile</Title>
      <Paper p="lg" radius="md" withBorder>
        <Stack gap="md">
          <Group gap="md">
            <Avatar size="xl" radius="xl" color="blue">
              JD
            </Avatar>
            <Stack gap={4}>
              <Title order={3}>{MOCK_USER.name}</Title>
              <Text size="sm" c="dimmed">
                {MOCK_USER.role}
              </Text>
            </Stack>
          </Group>
          <Stack gap="xs">
            <Text size="sm" fw={600}>
              Email
            </Text>
            <Text size="sm" c="dimmed">
              {MOCK_USER.email}
            </Text>
          </Stack>
          <Stack gap="xs">
            <Text size="sm" fw={600}>
              Member since
            </Text>
            <Text size="sm" c="dimmed">
              {MOCK_USER.joined}
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </Flex>
  );
}
