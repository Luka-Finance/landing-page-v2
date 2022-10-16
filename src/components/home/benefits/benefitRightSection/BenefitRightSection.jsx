import { useContext } from "react";
import { benefitContext } from "../../../helper/Context";
import { Card, Image } from "../../../ui";

const BenefitRightSection = () => {
  const { isEmployee } = useContext(benefitContext);
  return (
    <>
      <Card flex="5" radius="0 100px" overflow="hidden">
        <Image
          width="100%"
          src={
            isEmployee
              ? "asset/employee-benefit.png"
              : "asset/employer-benefit.png"
          }
          alt="benefit"
        />
      </Card>
    </>
  );
};

export default BenefitRightSection;
