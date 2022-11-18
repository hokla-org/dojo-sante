import patients from "./data/patients.json";

export default function initPatientsStorage() {
  if (localStorage.getItem("patients") === null)
    localStorage.setItem("patients", JSON.stringify(patients));
}
