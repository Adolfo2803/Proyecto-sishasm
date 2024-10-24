import { Component, EventEmitter, OnInit, Output, Pipe,} from '@angular/core';
import { FechaserviceService } from '../../services/fechaservice.service';
import { DatePipe } from '@angular/common';
import { log } from 'console';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent   {

currentDate: Date = new Date();

constructor(private fechaService: FechaserviceService){
  
}
  // ngOnInit(): void {
  //   this.fechaService.dateObs.subscribe(currentDate =>{
  //     this.currentDate = currentDate;
     
  //   });



  @Output() sideNavToggle=new EventEmitter<boolean>();
  menuStatus: boolean = false;
 
    SideNavToggle(){
      this.menuStatus = !this.menuStatus;
      this.sideNavToggle.emit(this.menuStatus)
    }

  }


    
  



