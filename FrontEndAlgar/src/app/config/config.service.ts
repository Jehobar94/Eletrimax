import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'protractor';

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';

    getConfig() {
    return this.http.get<Config>(this.configUrl);
    }

  constructor(private http: HttpClient) { }
}