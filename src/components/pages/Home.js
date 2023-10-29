import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import '../../App.css';
import ModalC from '../Modal/Modal';

const Modal = ({ setLoadedModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setLoadedModal();
    }, 1000);
  }, [setLoadedModal]);

  return <ModalC />;
};

const Terminal = lazy(() => import('../Terminal/Terminal'));

function Home() {
  const [loadModal, setLoadModal] = useState(false);


  const setLoadedModal = useCallback(() => {
    setLoadModal(true);
  }, []);

  return (
    <>
      {loadModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Terminal />
        </Suspense>
      )}
      <Modal setLoadedModal={setLoadedModal} />
    </>
  );
}

export default Home;
