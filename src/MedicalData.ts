type BloodPressureData = { datetime: string; value1: number; value2: number };
type BloodPressureUnit = "mmHg";
type BloodPressureName = "🩸 Pression sanguine";

type CardiacFrequencyData = { datetime: string; value: number };
type CardiacFrequencyUnit = "bpm";
type CardiacFrequencyName = "🫀 Fréquence cardiaque";

type GlycaemiaData = { datetime: string; value: number; };
type GlycaemiaUnit = "g/L";
type GlycaemiaName = "🍪 Taux de glycémie";

export type PatientMedicalData = {
  unit: BloodPressureUnit | CardiacFrequencyUnit | GlycaemiaUnit;
  name: BloodPressureName | CardiacFrequencyName | GlycaemiaName;
  data: BloodPressureData[] | CardiacFrequencyData[] | GlycaemiaData[];
};

export type PatientsMedicalData = {
  [patientID: string]: PatientMedicalData;
};
