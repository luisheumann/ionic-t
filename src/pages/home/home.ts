import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 private todo : FormGroup;
 public photos: any;
 public base64Image: string;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latitud:any;
  longitud:any;
 
  constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public geolocation: Geolocation, private camera: Camera, private alertCtrl: AlertController) {
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      fotitos: [''],
    });
  }


  logForm(){
    console.log(this.todo.value)
  }


  ngOnInit(){
  	this.photos= [];
  }


  takePhoto(){
  	const options: CameraOptions = {
  		quality: 50,
  		destinationType: this.camera.DestinationType.DATA_URL,
  		encodingType: this.camera.EncodingType.JPEG,
  		mediaType: this.camera.MediaType.PICTURE
  	}

  	this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
this.base64Image = 'data:image/jpeg;base64,' + imageData;
this.photos.push(this.base64Image);
this.photos.reverse();
 }, (err) => {
 // Handle error
 });


  }

 deletePhoto(index){

 	let confirm = this.alertCtrl.create({
      title: 'Seguro que quierees borrar la foto',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {
            
          }
        },
        {
          text: 'Si',
          handler: () => {
          

            this.photos.splice(index,1);
          }
        }
      ]
    });
    confirm.present();

//
 }

  ionViewDidLoad(){
    this.loadMap();
  }

  addMarker(){

  	console.log(this.photos);

  

  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  console.log(position.coords.latitude);
   console.log(position.coords.longitude);
  this.latitud = position.coords.latitude;
  this.longitud = position.coords.longitude;

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
    }, (err) => {
      console.log(err);
    });
 
  }




 
}