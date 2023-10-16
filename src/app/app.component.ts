import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  toshow='0';
current_value=''
  writetoinput(value:string){
this.current_value=this.current_value+value;
this.toshow=this.current_value;
  }

  equals(){
    this.toshow=eval(this.current_value);
    this.current_value=this.toshow;
  }

  clear(){
    this.current_value='';
    this.toshow='0';
  }

  back(){
    this.current_value=this.current_value.slice(0,-1);
    this.toshow=this.current_value;
    if(this.current_value==''){
      this.toshow='0';

    }
  }

  calcvalue(solve:any){
    if(solve.charAt(0)=='0')
    {
      solve=solve.slice(1,);
    }
    this.toshow=eval(solve);
  }
}
