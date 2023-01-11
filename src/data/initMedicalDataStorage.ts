import medicalData from "../data/medicalData.json";

export default function initMedicalDataStorage() {
  if (localStorage.getItem("medicalData") === null)
    localStorage.setItem("medicalData", JSON.stringify(medicalData));
}
