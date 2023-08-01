import { Outlet } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const AppLayout = () => {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
