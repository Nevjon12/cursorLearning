import { useState } from 'react';
import { AppShell, Burger, Group, Text, NavLink, Stack } from '@mantine/core';
import { Outlet, useLocation, Link } from 'react-router-dom';

export function ShellLayout() {
  const [opened, setOpened] = useState(true);
  const location = useLocation();

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
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            hiddenFrom="sm"
            size="sm"
            aria-label="Toggle sidebar"
          />
          <Text fw={600}> Cursor Playground Project</Text>

        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          <NavLink
            component={Link}
            to="/"
            label="Main"
            active={location.pathname === '/'}
          />
          <NavLink
            component={Link}
            to="/faq"
            label="FAQ"
            active={location.pathname === '/faq'}
          />
          <NavLink
            component={Link}
            to="/about-me"
            label="About Me"
            active={location.pathname === '/about-me'}
          />
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

