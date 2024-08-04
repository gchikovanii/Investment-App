import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataInput } from './inputs.model';
import { CalculateService } from '../services/calculate.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment! :number;
  annualInvestment! :number;
  expectedReturn! :number;
  duration! :number;
  dataInput! : DataInput;
  calculationService = inject(CalculateService);
  @Output() output = new EventEmitter();

  onSubmit(){
    var result = this.calculationService.calculateInvestmentResults(this.initialInvestment,this.duration,this.expectedReturn,this.annualInvestment);
    this.output.emit(result);
  }

}
