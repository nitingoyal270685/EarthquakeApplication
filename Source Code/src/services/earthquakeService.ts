import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../node_modules/@angular/core';

// Environment file imports for configuration data
import { environment } from '../environments/environment';

// Error handling related imports
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class EarthquakeService {
  constructor(private httpClient: HttpClient) {
  }

  get_data(): any {
    // Calling API for getting response for Earthquake data
    return this.httpClient.get(environment.earthQuakeServiceAPIUrl).pipe(
      retry(1),
      catchError(this.handleError));
  }
 
  // Method for error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}