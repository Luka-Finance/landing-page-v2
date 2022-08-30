import { navs } from "../../data";
import { Card, grayColor, LinkText, primaryColor } from "../../ui";
import { HashLink as Link } from "react-router-hash-link";

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
        {navs.map((nav, index) => (
          <Card key={index}>
            {nav.inpage === "" ? (
              <Link
                style={{
                  display: "block",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: `${grayColor}`,
                  margin: "3px 0 0",
                }}
                to={nav.path}
                key={index}
              >
                {nav.nav}
              </Link>
            ) : (
              <LinkText
                color={nav.path === path ? primaryColor : grayColor}
                hcolor={primaryColor}
                display="block"
                hweight="600"
                heavy
                size="18px"
                to={nav.path}
                key={index}
              >
                {nav.nav}
              </LinkText>
            )}
          </Card>
        ))}
      </Card>
    </>
  );
};

export default Navbar;
