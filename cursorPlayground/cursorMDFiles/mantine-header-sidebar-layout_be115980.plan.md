---
name: mantine-header-sidebar-layout
overview: Introduce a basic Mantine-powered layout with a header at the top, a left sidebar, and a main content area in the existing Vite React TypeScript app.
todos:
  - id: ensure-mantine-installed
    content: Confirm Mantine core/hooks are installed and styles imported in the app entry point.
    status: completed
  - id: create-shell-layout
    content: Create a `ShellLayout` component using Mantine `AppShell` with header, left navbar, and main regions.
    status: completed
  - id: integrate-layout-in-app
    content: Update `App.tsx` to use `MantineProvider` and render the new `ShellLayout` with placeholder header/sidebar/content text.
    status: completed
isProject: false
---

## Goal

Implement a simple React layout using Mantine that matches the sketch: a full-width header at the top, a left sidebar, and a main content area to the right.

## UI Theme Requirement

- The application should run in **dark mode exclusively** (no light mode toggle).

## Approach

- **Use Mantine AppShell**: Leverage Mantine's `AppShell` component to define the header, navbar (left sidebar), and main content regions.
- **Create a reusable layout component**: Implement a `ShellLayout` (or similar) React component that encapsulates this structure and can wrap any page content.
- **Wire into the app root**: Wrap the app in `MantineProvider` and render the new layout from the main `App` component.

## Key Files to Touch

- `**cursorPlayground/src/App.tsx**`: Replace the default Vite content with Mantine's `MantineProvider` and the new layout component.
- `**cursorPlayground/src/layouts/ShellLayout.tsx` (new)**: Define the header, left sidebar, and content regions using Mantine components.

## High-Level Steps

- **Step 1 – Ensure Mantine setup**
  - Confirm `@mantine/core` and `@mantine/hooks` are installed and that global Mantine styles are imported once at the app entry level.
- **Step 2 – Implement layout component**
  - Create `ShellLayout` that:
    - Uses `AppShell` with `header`, `navbar`, and `main`.
    - Places a `Header` across the top, a left `Navbar` for the sidebar, and `AppShell.Main` for the content.
    - Optionally includes a responsive burger menu for collapsing the sidebar on mobile.
- **Step 3 – Integrate layout into App**
  - In `App.tsx`, wrap the layout with `MantineProvider` and render placeholder text for "Header", "Left sidebar", and "Content" so the structure matches the provided sketch.

## Example Structure (Conceptual)

- `MantineProvider`
  - `ShellLayout`
    - `AppShell.Header`: top header bar.
    - `AppShell.Navbar`: left sidebar.
    - `AppShell.Main`: scrollable content area to the right.

