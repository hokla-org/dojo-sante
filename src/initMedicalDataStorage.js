import medicalDataWarning from "./data/medicalDataWarning.json";
import medicalData from "./data/medicalData.json";
import patientsMedicalData from "./data/patientsMedicalData.json";

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
