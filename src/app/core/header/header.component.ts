import { Component} from '@angular/core';

import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public authService: AuthService) { }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
