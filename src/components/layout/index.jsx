import { Main, MainSection } from "../ui";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <MainSection width="100%" maxwidth="100%">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </MainSection>
    </>
  );
};

export default Layout;
