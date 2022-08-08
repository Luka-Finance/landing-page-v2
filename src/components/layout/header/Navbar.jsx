import { navs } from "../../data";
import { Card, grayColor, LinkText, primaryColor } from "../../ui";

const Navbar = () => {
  const path = window.location.pathname;

  return (
    <>
      <Card
        display="flex"
        width="425px"
        justifycontent="space-between"
        mdflexdirection="column"
        mdgap="20px"
      >
        {navs.map((nav, key) => (
          <LinkText
            color={nav.path === path ? primaryColor : grayColor}
            hcolor={primaryColor}
            display="block"
            hweight="600"
            heavy
            size="18px"
            to={nav.path}
            key={key}
          >
            {nav.nav}
          </LinkText>
        ))}
      </Card>
    </>
  );
};

export default Navbar;
