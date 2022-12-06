import { PatientMedicalData } from "../MedicalData";
import { usePatientsMedicalData } from "./usePatientsMedicalData";

export const usePatientMedicalData = (patientId): PatientMedicalData | null => {
  const patientsMedicalData = usePatientsMedicalData();

  return patientId in patientsMedicalData
    ? patientsMedicalData[patientId]
    : null;
};
