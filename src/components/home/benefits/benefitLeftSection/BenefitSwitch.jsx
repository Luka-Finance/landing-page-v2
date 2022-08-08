import React, { useContext } from "react";
import { benefitContext } from "../../../helper/Context";
import { accentColor, Card, Text, whiteColor } from "../../../ui";

const BenefitSwitch = () => {
  const { isEmployee, setIsEmployee } = useContext(benefitContext);
  return (
    <>
      <Card
        width="358px"
        height="56px"
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
          color={!isEmployee ? whiteColor : "#9BCAAC"}
          lineheight="24px"
          padding="14px 31px"
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
          lineheight="24px"
          padding="14px 31px"
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
