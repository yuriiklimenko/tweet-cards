import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { Header } from "../Header/Header";
import { Toaster } from "react-hot-toast";
import { Container } from "../Container/Container";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Toaster position="top-center" />
    </>
  );
};
