import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ExplainLogService {
  private api_url = 'http://localhost:3000/api/explain-log';
  constructor(private http: HttpClient) {}

  explainLog(logs: string, context: string) {
    return this.http.post<any>(this.api_url, {
      logs,
      context,
    });
  }
}
