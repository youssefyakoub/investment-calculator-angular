import { CurrencyPipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private initialInvestment: InvestmentService) {}

  results = computed(() => this.initialInvestment.resultsData());
  //or
  // results = this.initialInvestment.resultsData.asReadonly()
}
