import { useState } from 'react';
import { AppShell, Burger, Group, Text } from '@mantine/core';

export function ShellLayout() {
  const [opened, setOpened] = useState(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw={600}>Header</Text>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle sidebar"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Text fw={500}>Left sidebar</Text>
      </AppShell.Navbar>

      <AppShell.Main>
        <Text>Content</Text>
      </AppShell.Main>
    </AppShell>
  );
}

