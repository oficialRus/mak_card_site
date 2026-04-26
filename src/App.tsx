import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DeckRassvetPage from './pages/DeckRassvetPage';
import DeckYaVybirajuPage from './pages/DeckYaVybirajuPage';
import OzonBuyPage from './pages/OzonBuyPage';
import TechniquesPage from './pages/TechniquesPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import UserAgreementPage from './pages/UserAgreementPage';
import CookiePolicyPage from './pages/CookiePolicyPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/deck/ya-vybiraju-byt" element={<DeckYaVybirajuPage />} />
          <Route path="/deck/rassvet" element={<DeckRassvetPage />} />
          <Route path="/buy" element={<OzonBuyPage />} />
          <Route path="/techniques" element={<TechniquesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/user-agreement" element={<UserAgreementPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
