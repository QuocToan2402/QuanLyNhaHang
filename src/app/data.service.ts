import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { Restaurant } from "./models/restaurant.model";
import { Role } from "./models/role.model";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = environment.api;
  private HttpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  }
  constructor (private httpClient: HttpClient) {}

  public getAllRestaurant(): Observable<Restaurant[]>{
    const url = `${this.REST_API_SERVER}/restaurant`
    return this.httpClient.get<Restaurant[]>(url, this.HttpOptions);
  }

  public postRestaurant(payload :Restaurant): Observable<any>{
    const url = `${this.REST_API_SERVER}/restaurant`
    return this.httpClient.post<Restaurant[]>(url, payload, this.HttpOptions);
  }
  public getAllRole(): Observable<Role[]>{
    const url = `${this.REST_API_SERVER}/role`
    return this.httpClient.get<Role[]>(url, this.HttpOptions);
  }
}
