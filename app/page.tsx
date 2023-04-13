"use client";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import useRegisterModal from "./hooks/useRegisterModal";

const Home = () => {
  const registerModal = useRegisterModal();
  return (
    <ClientOnly>
      <Container>
        <div>
          <button onClick={registerModal.onOpen}>Sinscrire</button>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
