import { Outlet } from 'react-router-dom';
import StoreNavbar from './components/StoreNavbar';

const Root = () => {
  return (
    <>
      <StoreNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
