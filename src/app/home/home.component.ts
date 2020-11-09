import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repos } from 'src/app/repos';
import { GitRequestService } from 'src/app/git-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchUsers = true;

  user: User;
  repo: Repos;
  username: string;

  constructor(private service: GitRequestService) { }
  getProfile() {
    this.service.getUsername(this.username);

    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    console.log(this.repo);
  }
  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }
  ngOnInit() {
    this.service.getUser();
    this.user = this.service.user;

    this.service.getRepos(this.username);
    this.repo = this.service.repo;
    const options = {
      strings: ['nter your username please.'],
      
 };

  }

}
