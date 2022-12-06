import { PatientWithWarnings } from "./components/Patient/Patient.type";
import { usePatients } from "./usePatients";
import { usePatientsMedicalData } from "./usePatientsMedicalData";

export const usePatientsWithMedicalWarnings = (): PatientWithWarnings[] => {
  const patientsMedicalData = usePatientsMedicalData();
  const patients = usePatients();

  const patientsWithMedicalWarnings = patients.map((patient) => {
    const patientData =
      patient.id in patientsMedicalData
        ? patientsMedicalData[patient.id]
        : null;

    let warnings: string[] = [];

    if (patientData === null) return { ...patient, warnings };

    const medicalDataKeys = Object.keys(patientData);
    medicalDataKeys.forEach((dataKey) => {
      if (patientData[dataKey].isWarning)
        warnings.push(patientData[dataKey].name);
    });

    return { ...patient, warnings };
  });

  return patientsWithMedicalWarnings;
};
