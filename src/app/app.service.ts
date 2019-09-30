import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    searchGiphy(searchText: string, count: number = 20, offset: number = 0) {
        return new Promise((resolve, reject) => {
            this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.api_key}&q=${searchText}&limit=${count}&offset=${offset}`).subscribe(res => {
                resolve(res)
             },  error => {
                 reject(error)
             })
        })
    }

    trendsGiphy(count: number = 20, offset: number = 0){
        return new Promise((resolve, reject) => {
            this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.api_key}&limit=${count}&offset=${offset}`).subscribe(res => {
                resolve(res);
            }, error => {
                console.error(error);
            })
        })
    }
}