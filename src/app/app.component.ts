import { Component, Inject } from '@angular/core';
import { FunctionsService } from './functions.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    @Inject(FunctionsService) private functionsService: FunctionsService
  ) {}

  showName() {
    this.functionsService.getName().subscribe((data) => {
      console.log(data);
    });
  }
  title = 'muehler-website';
}
