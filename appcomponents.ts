import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public name:any;
  public age:any;
  public salary:any;
  public updatename:any;
  public updateage:any;
  public updatesalary:any;
  public index:any;
  public emparray:any = []
  addemployee(){
    this.emparray.push({"name":this.name,"age":this.age,"salary":this.salary})
    this.name = ""
    this.age = ""
    this.salary = ""
  }
  deleteemp(index:any){
    this.emparray.splice(index,1)
  }
  updateemp(index:any){
    this.updatename = this.emparray[index].name
    this.updateage = this.emparray[index].age
    this.updatesalary = this.emparray[index].salary
    this.index = index
  }

  updateemployee(){
    if(this.index==undefined){
      alert("please select employee to update")
    }
    else{
      this.emparray[this.index] = {"name":this.updatename,"age":this.updateage,"salary":this.updatesalary}
      this.updatename = ""
    this.updateage = ""
    this.updatesalary = ""
    }
  }


}
