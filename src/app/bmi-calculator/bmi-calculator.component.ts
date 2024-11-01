import { Component } from '@angular/core';
import { BMI } from '../models/bmi';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {

  bmi: BMI = {
    height: 0,
    weight: 0,
    age: 0,
  };

  result: string = '';
  status: string = '';

  calculateBMI(): void {
    // Vérifier que les valeurs de poids et de taille sont valides
    if (this.bmi.height > 0 && this.bmi.weight > 0) {
      const heightInMeters = this.bmi.height / 100; // Convertir la taille en mètres
      this.bmi.bmiValue = this.bmi.weight / (heightInMeters * heightInMeters); // Formule de calcul de l'IMC

      console.log(this.bmi.bmiValue)

      // Déterminer le statut pondéral en fonction de l'IMC calculé
      if (this.bmi.bmiValue < 18.5) {
        this.status = 'Insuffisance pondérale';
      } else if (this.bmi.bmiValue >= 18.5 && this.bmi.bmiValue <= 24.9) {
        this.status = 'Poids sain';
      } else if (this.bmi.bmiValue >= 25.0 && this.bmi.bmiValue <= 29.9) {
        this.status = 'Surpoids';
      } else {
        this.status = 'Obésité';
      }

      // Mettre à jour le résultat avec une précision de deux décimales
      this.result = `Votre IMC est de ${this.bmi.bmiValue.toFixed(2)} (${this.status}).`;
    } else {
      this.result = 'Veuillez entrer des valeurs valides pour la taille et le poids.';
    }
  }
}
