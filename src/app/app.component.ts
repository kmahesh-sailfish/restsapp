import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:User[];
  constructor(private service:UserService){}
  title = 'restsapi';
    ngOnInit() {
        return this.service.getUser().subscribe(data => { this.users = data; });
        
    }
}
