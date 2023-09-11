import { Component } from '@angular/core';
import { MyService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-devops-ng';
  data: any;
  constructor(private myService: MyService) { }


  getData() {
    this.myService.getSomeData().subscribe((data: any) => {
      console.log(data);
      this.data = data.test;

      // Process the data here
    });
  }
}
