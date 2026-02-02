import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShellLayout } from './layouts/ShellLayout';
import { MainPage } from './pages/MainPage';
import { FAQPage } from './pages/FAQPage';
import { AboutMePage } from './pages/AboutMePage';
import { SettingsPage } from './pages/SettingsPage';
import { ProfilePage } from './pages/ProfilePage';
import { DogsPage } from './pages/DogsPage';

const theme = createTheme({
  primaryColor: 'blue',
});

function App() {
  return (
    <BrowserRouter>
      <MantineProvider theme={theme} forceColorScheme="dark">
        <Routes>
          <Route path="/" element={<ShellLayout />}>
            <Route index element={<MainPage />} />
            <Route path="dogs" element={<DogsPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="about-me" element={<AboutMePage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
