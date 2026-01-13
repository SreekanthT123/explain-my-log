import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInputComponent } from './components/log-input/log-input.component';
import { LogOutputComponent } from './components/log-output/log-output.component';
import { ExplainLogService } from './services/explain-log.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LogInputComponent, LogOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'explain-my-log-ui';
  loading: boolean = false;
  error: string = '';
  result: any = null;

  constructor(private explainLogService: ExplainLogService) {}

  onSubmit(data: { logs: string; context: string }) {
    this.loading = true;
    this.error = '';
    this.result = null;

    this.explainLogService.explainLog(data.logs, data.context).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: () => {
        (this.error = 'We couldn’t make sense of these logs. Try adding more context or checking the input.'), (this.loading = false);
      },
    });
  }
}
