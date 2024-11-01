// src/app/models/bmi.model.ts
export interface BMI {
    height: number; // en centimètres
    weight: number; // en kilogrammes
    age: number; // en années
    bmiValue?: number; // IMC calculé
    status?: string; // Statut pondéral
  }
  