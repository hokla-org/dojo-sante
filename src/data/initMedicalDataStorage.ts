import medicalDataWarning from "./medicalDataWarning.json";
import medicalData from "./medicalData.json";
import patientsMedicalData from "./patientsMedicalData.json";

export default function initMedicalDataStorage() {
  if (localStorage.getItem("medicalData") === null)
    localStorage.setItem("medicalData", JSON.stringify(medicalData));
  if (localStorage.getItem("medicalDataWarning") === null)
    localStorage.setItem(
      "medicalDataWarning",
      JSON.stringify(medicalDataWarning)
    );
  if (localStorage.getItem("patientsMedicalData") === null)
    localStorage.setItem(
      "patientsMedicalData",
      JSON.stringify(patientsMedicalData)
    );
}
