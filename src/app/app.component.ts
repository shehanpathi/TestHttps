import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  text:string;

  constructor(private httpClient: HttpClient){
    this.httpClient.get("http://localhost:3000/", {responseType: 'text'}).subscribe((res)=>{
      console.log(res)
        this.title = res.toString();
    })
  }

  
}
