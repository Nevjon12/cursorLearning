import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShellLayout } from './layouts/ShellLayout';
import { MainPage } from './pages/MainPage';
import { FAQPage } from './pages/FAQPage';
import { AboutMePage } from './pages/AboutMePage';

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<ShellLayout />}>
            <Route index element={<MainPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="about-me" element={<AboutMePage />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
