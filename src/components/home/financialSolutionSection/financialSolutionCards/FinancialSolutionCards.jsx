import React from "react";
import { Card } from "../../../ui";
import FinancialSolutionLeftDiv from "./FinancialSolutionLeftDiv";
import FinancialSolutionRightDiv from "./FinancialSolutionRightDiv";

const FinancialSolutionCards = () => {
  return (
    <>
      <Card display="flex" gap="60px" mdflexdirection="column" mdgap="50px">
        <FinancialSolutionLeftDiv />
        <FinancialSolutionRightDiv />
      </Card>
    </>
  );
};

export default FinancialSolutionCards;
