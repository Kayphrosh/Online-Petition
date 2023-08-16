import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StepOne from "@/components/CreateAppealForm/stepOne";
import StepTwo from "@/components/CreateAppealForm/stepTwo";
import StepThree from "@/components/CreateAppealForm/stepThree";
import StepFour from "@/components/CreateAppealForm/stepFour";
import CreateAppealNavbar from "@/components/CreateAppealNavbar/CreateAppealNavbar";
import AppealCreatedModal from "@/components/CreateAppealForm/appealCreatedModal";

const CreateAppeal = () => {
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    involved_parties: [],
    required_signatures_range: "",
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      // console.log(response)
      if (response.ok) {
        setSuccessModalOpen(true);
      } else {
                setSuccessModalOpen(true);
        // toast.error("An error occurred while submitting the form");
      }
    } catch (error) {
              setSuccessModalOpen(true);
      // toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <div>
      <CreateAppealNavbar />
      {currentStep === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
      {currentStep === 4 && (
        <StepFour
          formData={formData}
          setFormData={setFormData}
          onNext={handleSubmit}
          onPrevious={handlePreviousStep}
        />
      )}

      <AppealCreatedModal
        isSuccessModalOpen={isSuccessModalOpen}
        onSuccessCloseModal={handleCloseSuccessModal}
      />
      <ToastContainer />
    </div>
  );
};

export default CreateAppeal;
