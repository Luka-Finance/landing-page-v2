import React from "react";
import { footerContent } from "../../../../data";
import {
  Card,
  grayColor,
  LinkText,
  TitleText,
  whiteColor,
} from "../../../../ui";

const FooterLinks = () => {
  return (
    <>
      <Card
        style={{ flexWrap: "wrap" }}
        display="flex"
        width="100%"
        justifycontent="space-between"
        mdjustifycontent="unset"
        mdgap="50px"
        flex="9"
      >
        {footerContent.map((footer, key) => (
          <Card key={key} display="flex" flexdirection="column" gap="27px">
            <TitleText
              color={whiteColor}
              heavy
              size="18px"
              mdsize="15px"
              lineheight="24.55px"
            >
              {footer.headings}
            </TitleText>
            {footer.foooterMenus.map((footerMenu, key) => (
              <LinkText
                color={grayColor}
                size="18px"
                mdsize="15px"
                to={footerMenu.path}
                key={key}
                display="block"
                width="fit-content"
              >
                {footerMenu.name}
              </LinkText>
            ))}
          </Card>
        ))}
      </Card>
    </>
  );
};

export default FooterLinks;
