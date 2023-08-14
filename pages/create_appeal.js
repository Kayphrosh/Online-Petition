import React from "react";
import StepOne from "@/components/CreateAppealForm/stepOne";
import StepTwo from "@/components/CreateAppealForm/stepTwo";
import StepThree from "@/components/CreateAppealForm/stepThree";
import StepFour from "@/components/CreateAppealForm/stepFour";
import CreateAppealNavbar from "@/components/CreateAppealNavbar/CreateAppealNavbar";

const CreateAppeal = () => {
  return (
    <div>
      <CreateAppealNavbar />
      {/* <StepOne />
      <StepTwo />
      <StepThree /> */}
      <StepFour />
    </div>
  );
};

export default CreateAppeal;
