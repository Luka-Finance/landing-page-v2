import React, { useContext } from "react";
import { benefitContext } from "../../../helper/Context";
import { accentColor, Card, Text, whiteColor } from "../../../ui";

const BenefitSwitch = () => {
  const { isEmployee, setIsEmployee } = useContext(benefitContext);
  return (
    <>
      <Card
        width="358px"
        mdwidth="280px"
        mdmargin="0 auto"
        height="56px"
        mdheight="40px"
        radius="30px"
        bg="#F3F5F7"
        display="flex"
        justifycontent="space-between"
        alignitems="center"
        position="relative"
        cursor="pointer"
        padding="2px"
      >
        <Text
          size="16px"
          mdsize="12px"
          mdwidth="100%"
          color={!isEmployee ? whiteColor : "#9BCAAC"}
          lineheight="24px"
          mdlineheight="18px"
          padding="14px 31px"
          mdpadding="10px 25px"
          radius="30px"
          bg={!isEmployee && accentColor}
          onClick={() => setIsEmployee(false)}
        >
          For Employers
        </Text>
        <Text
          bg={isEmployee && accentColor}
          color={isEmployee ? whiteColor : "#9BCAAC"}
          size="16px"
          mdsize="12px"
          mdwidth="100%"
          lineheight="24px"
          mdlineheight="18px"
          padding="14px 31px"
          mdpadding="10px 25px"
          radius="30px"
          onClick={() => setIsEmployee(true)}
        >
          For Employees
        </Text>
      </Card>
    </>
  );
};

export default BenefitSwitch;
