import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent {

  teamMembers = [ 
    { name: 'John Doe', role: 'Coach', photo: '/assets/coachimage.jpeg' },
    { name: 'Jane Smith', role: 'Nutritionist', photo: '/assets/coachimage.jpeg' },];

}
