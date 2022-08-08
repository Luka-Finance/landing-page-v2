import React, { useState } from "react";
import { FAQDetails } from "../../../data";
import { Card, Image, Text, TitleText } from "../../../ui";

const MainFaq = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <Card
      width="100%"
      bbottom="3px solid rgba(205, 214, 218, 0.25)"
      display="block"
      margin="50px 0 0 "
    >
      {FAQDetails.map((faq, key) => (
        <Card key={key}>
          <Card
            display="flex"
            alignitems="center"
            justifycontent="space-between"
            padding="20px 0"
            btop="3px solid rgba(205, 214, 218, 0.25)"
            bbottom={
              clicked === key ? "3px solid rgba(205, 214, 218, 0.25)" : "unset"
            }
          >
            <TitleText size="18px" lineheight="21.6px" heavy>
              {faq.question}
            </TitleText>
            <Image
              pointer
              onClick={() => toggle(key)}
              key={key}
              src="asset/plus.png"
              alt="plus"
              transform={clicked === key ? "rotate(45deg)" : "rotate(0deg)"}
            />
          </Card>
          {clicked === key && (
            <Card>
              <Text
                size="16px"
                lineheight="22.4px"
                color="rgba(60, 60, 67, 0.85)"
                padding="15px 25px"
              >
                {faq.answer}
              </Text>
            </Card>
          )}
        </Card>
      ))}
    </Card>
  );
};

export default MainFaq;
