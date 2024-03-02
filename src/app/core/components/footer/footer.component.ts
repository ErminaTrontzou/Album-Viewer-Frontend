import { Component } from '@angular/core';
import { faFacebookF, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faGithub = faGithub; 
  faLinkedin = faLinkedin;

}
