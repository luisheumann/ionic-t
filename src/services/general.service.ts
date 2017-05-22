import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { API_URL } from '../constants/vethub.constant';
import 'rxjs/add/operator/toPromise';
import * as JsonApiDataStore from "jsonapi-datastore";


@Injectable()
export class PetService {

	constructor(private http: Http, private userService: UserService, private tokenService: TokenService) {
		
	}
/*
	pets() : Promise<any> {
		
		return this.userService.loadUser().then(() => {
			//this.tokenService.token = this.userService.user.token;
			return this.http
				//.get(API_URL + '/users/' + this.userService.user.id + '/pets')
				.get(API_URL + '/users/' + 23 + '/pets')
				.toPromise()
				.then(res => {
					let json = res.json();
	    			let store = new JsonApiDataStore.JsonApiDataStore();
					store.sync(json);
					let data = store.findAll('pets');
					return data;
				});
		})
	}

	breeds() : Promise<any> {
		return this.http
			.get(API_URL + '/species/1/breeds')
			.toPromise()
			.then(res => {
				let json = res.json();
				let store = new JsonApiDataStore.JsonApiDataStore();
				store.sync(json);
				let data = store.findAll('breeds');
				return data;
			})
	}

	update(pet_id, data) : Promise<any> {

        return this.http
            .post(API_URL + '/pets/' + pet_id + '/update', JSON.stringify(data))
            .toPromise()
            .then(res => {
                let json = res.json();
    			let store = new JsonApiDataStore.JsonApiDataStore();
				store.sync(json);
				let data = store.find('pets', json.data.id);
				return data;
            })
    }

    weight(pet_id) : Promise<any> {
		return this.http
			.get(API_URL + '/pets/' + pet_id + '/weight')
			.toPromise()
			.then(res => {
				let json = res.json();
    			let store = new JsonApiDataStore.JsonApiDataStore();
				store.sync(json);
				let data = store.findAll('weights');
				return data;
			});
	}

	saveWeight(pet_id: string, weight: any) : Promise<any> {
		let data = {};
		data['weight'] = weight;
		return this.http
			.post(API_URL + '/pets/' + pet_id + '/weight/create', JSON.stringify(data))
			.toPromise()
			.then(res => res.json().data)
	}

	gallery(pet_id: string) : Promise<any[]> {
			return this.http
			.get(API_URL + '/pets/' + pet_id + '/gallery')
			.toPromise()
			.then(res => {
				let json = res.json();
    			let store = new JsonApiDataStore.JsonApiDataStore();
				store.sync(json);
				let data = store.findAll('images');
				return data;
			});		
	}*/
}