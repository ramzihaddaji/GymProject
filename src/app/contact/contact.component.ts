import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  sendEmail(event: Event) {
    event.preventDefault(); // Prévenir le rechargement de la page

    const form = event.target as HTMLFormElement;

    // Récupérer les valeurs des champs
    const firstName = (form.querySelector('#first-name') as HTMLInputElement).value;
    const lastName = (form.querySelector('#last-name') as HTMLInputElement).value;
    const userEmail = (form.querySelector('#email') as HTMLInputElement).value;
    const userMessage = (form.querySelector('#message') as HTMLTextAreaElement).value;

    // Créer un objet avec les données à envoyer
    const templateParams = {
      firstName: firstName,
      lastName: lastName,
      userEmail: userEmail,
      userMessage: userMessage
    };

    // Envoyer l'email avec les données du formulaire
    emailjs.send(
      environment.emailjs.serviceID,
      environment.emailjs.templateID,
      templateParams,
      environment.emailjs.publicKey
    )
    .then((result: EmailJSResponseStatus) => {
      console.log('Email envoyé avec succès:', result.text);
      alert("Votre email a été envoyé avec succès !");
      form.reset(); // Réinitialiser le formulaire après l'envoi
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi:", error.text);
      alert("Une erreur est survenue lors de l'envoi de l'email.");
    });
  }
}