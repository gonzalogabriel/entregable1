import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ApiserviceProvider {

  constructor(public http: HttpClient) {
    console.log('ApiserviceProvider RECY-CLEAN');
  }

  
  apiUrl = 'https://alisker.herokuapp.com/'
  getCenters() {
    console.log('GET: ' + this.apiUrl + 'centers' );
    return this.http.get( this.apiUrl + 'centers' );
  }

  getTypes(centroID){
    console.log('GET: ' + this.apiUrl + 'centers/' + centroID + '/allTypes' );
    return this.http.get( this.apiUrl + 'centers/' + centroID + '/allTypes' );
  }

  addCenters(params) {
    let p = new HttpParams()
        .set('name_center',   params.name_center)
        .set('address_center',      params.name_center)
        .set('gps_latitude', params.gps_latitude)
        .set('gps_longitude', params.gps_longititude)
        .set('email_center',   params.email_center)
        .set('phone_center',   params.phone_center)
        .set('email_schedule',   params.email_schedule)        ;

    console.log('POST: ' + this.apiUrl + '?' + p.toString());

    return this.http.post( this.apiUrl, '', {
        // headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: p
    })

}

}
