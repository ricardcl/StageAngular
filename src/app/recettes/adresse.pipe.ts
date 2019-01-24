import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adresse'
})
export class AdressePipe implements PipeTransform {



  //https://regex101.com/ pour tester les regex
  transform(adresse: string, format: string): any {

    if (!adresse) return;
    const pattern: RegExp = /(\d{1,}\s?)(.*)(\d{5}\s?)([A-Z]+\w*)/g;
    const parts = pattern.exec(adresse);

    let adresseObject;
    if (parts) {
      const [full, num, street, zip, city] = parts;
      adresseObject = { num, street, zip, city, full };
    }
    console.log(adresseObject);
    switch (format) {
      case 'short':
        return `${adresseObject.zip},${adresseObject.num} ${adresseObject.street}`;
      case 'long':
        return `-Num:${adresseObject.num} 
        -Voie:${adresseObject.street} 
        -VIlle:${adresseObject.city} 
        -CP:${adresseObject.zip} 
        `
      default:
        return adresse;
    }

  }

}
