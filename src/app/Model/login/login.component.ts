import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginasAdmin(form :NgForm)
  {
    
    if(form.value.password =="00001")
    {
     this.router.navigate(['/panel']);
    }
    else{
      this.router.navigate(['/redirect']);
    }

  }

}
