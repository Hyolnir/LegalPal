import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-pal',
  templateUrl: './legal-pal.page.html',
  styleUrls: ['./legal-pal.page.scss'],
})
export class LegalPalPage implements OnInit {

  constructor(private router: Router) { }

  goToHomePage() {
    this.router.navigate(['/legal-pal']); 
  }

  ngOnInit() {
  }

  navigateToLibrary() {
    this.router.navigateByUrl('/library'); // Navigate to the library page
  }

  navigateToReport() {
    this.router.navigateByUrl('/report'); // Navigate to the report page
  }

}
