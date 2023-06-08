import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../models/Admin';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient,private httpClient: HttpClient) { }

  public loginAdminRemote(admin?: Admin): Observable<Object> 
{
  return this.httpClient.post("http://localhost:8080/api/v1/loginAdmin",admin);
}

// loginAdminRemote (admin : Admin) : Observable<Token> {
//   return this.http.post<Token>(`${environment.API_URL}/api/v1/loginAdmin`, {
//     admin
//   });
// }

}
