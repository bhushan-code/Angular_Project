import { Component } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css'
})
export class MarvellousComponent 
{
    public BatchName = "Python ML"

    public DemoFun()
    {
      return "Inside Demo Fun";
    }
    Display()
    {
      console.log("Inside Display");
    }
}
