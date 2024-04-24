import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  sideBarOpen = true;
  name1: any;
  loadedFeature: string | undefined;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  name: any;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
   }
   
   onSelect(feature:string)
   {
     this.loadedFeature = feature;
   }
   onNavigate(id:string)
  {
    this.loadedFeature = id;
  }

  userloggedIn()
  {
     this.name1 = localStorage.getItem('token1');
     return this.name1;
  }

  toggleSidebar() 
  {
    this.toggleSidebarForMe.emit();
  }

  onlogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
