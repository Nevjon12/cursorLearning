---
name: Routing Setup Plan
overview: Set up React Router for navigation between Main, FAQ, and About Me pages, with navigation links in the AppShell navbar that render content in AppShell.Main.
todos: []
isProject: false
---

# Routing Setup Plan

## Overview

This plan sets up client-side routing using React Router DOM to navigate between three main sections (Main, FAQ, About Me) with navigation links in the AppShell navbar.

## Current State

- Project uses React 19.2.0 with TypeScript and Mantine UI
- `ShellLayout.tsx` contains an AppShell with Header, Navbar, and Main sections
- No routing library is currently installed
- Navbar currently displays placeholder text "Left sidebar"
- AppShell.Main currently displays placeholder text "Content"

## Implementation Steps

### 1. Install React Router DOM

- Add `react-router-dom` to dependencies in `package.json`
- Install the package (will be done during execution)

### 2. Create Page Components

Create three page components in a new `pages` directory:

- `src/pages/MainPage.tsx` - Main/home page component
- `src/pages/FAQPage.tsx` - FAQ page component  
- `src/pages/AboutMePage.tsx` - About Me page component

Each component will be a simple functional component that can be expanded later.

### 3. Set Up Routing in App Component

Update `src/App.tsx` to:

- Import `BrowserRouter` from `react-router-dom`
- Wrap the MantineProvider with BrowserRouter
- Import and set up `Routes` and `Route` components
- Define routes for `/`main, `/faq`, and `/about-me`
- Pass routing context to ShellLayout

### 4. Update ShellLayout Component

Modify `src/layouts/ShellLayout.tsx` to:

- Import `NavLink` from `react-router-dom` and `Stack` from `@mantine/core` for navigation structure
- Replace the placeholder "Left sidebar" text in `AppShell.Navbar` with navigation links
- Use `NavLink` components styled with Mantine for each route (Main, FAQ, About Me)
- Import `Outlet` from `react-router-dom` to render child routes
- Replace the placeholder "Content" text in `AppShell.Main` with `<Outlet />` to render the active route's component

### 5. File Structure

```
src/
  ├── pages/
  │   ├── MainPage.tsx
  │   ├── FAQPage.tsx
  │   └── AboutMePage.tsx
  ├── layouts/
  │   └── ShellLayout.tsx (updated)
  ├── App.tsx (updated)
  └── main.tsx
```

## Technical Details

### Routing Configuration

- Use `BrowserRouter` for clean URLs (no hash)
- Routes will be:
  - `/`main
  - `/faq` → FAQPage
  - `/about-me` → AboutMePage

### Navigation Links

- Use Mantine's `NavLink` component (from `@mantine/core`) which integrates well with React Router's `NavLink`
- Style navigation links to match Mantine design system
- Add active state styling to highlight the current page

### Component Rendering

- `Outlet` component will render the matched route component inside `AppShell.Main`
- This keeps the layout structure intact while swapping page content

## Dependencies to Add

- `react-router-dom` (latest version compatible with React 19)

