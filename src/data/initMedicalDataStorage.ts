import medicalDataWarning from "./medicalDataWarning.json";
import medicalData from "./medicalData.json";

export default function initMedicalDataStorage() {
  if (localStorage.getItem("medicalData") === null)
    localStorage.setItem("medicalData", JSON.stringify(medicalData));
  if (localStorage.getItem("medicalDataWarning") === null)
    localStorage.setItem(
      "medicalDataWarning",
      JSON.stringify(medicalDataWarning)
    );
}
