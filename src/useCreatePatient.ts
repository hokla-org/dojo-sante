import { CreatePatientFormData } from "./CreatePatient.type";
import { Patient } from "./Patient.type";
import { usePatients } from "./usePatients";

export const useCreatePatient = () => {
  const patients = usePatients();

  const getNewPatientId = () => {
    const patientIds = patients.flatMap((patient) => {
      const parsed = Number.parseInt(patient.id);
      return Number.isNaN(parsed) ? [] : parsed;
    });

    const maxPatientId = Math.max(...patientIds);

    return (maxPatientId + 1).toString();
  };

  const formatBirthdate = (date: Date) => {
    const ISODateTime = date.toISOString();
    return ISODateTime.split("T")[0];
  };

  const buildNewPatient = (formData: CreatePatientFormData): Patient => {
    return {
      ...formData,
      id: getNewPatientId(),
      birthdate: formatBirthdate(formData.birthdate),
      generalPractitioner: "Dr. Burris",
    };
  };

  const saveNewPatient = (newPatient: Patient) => {
    const newPatients = [...patients, newPatient];
    localStorage.setItem("patients", JSON.stringify(newPatients));
  };

  return { saveNewPatient, buildNewPatient };
};
