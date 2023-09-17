// license-plate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LicensePlateService {


    private readonly ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Plate Sequence: "000000" -> "ZZZZZZ"
    // [0-9] -> 10 | [A-Z] => 26
    // (-1) => 10ˆ6 − 1 = 999999
    private readonly MAX_INDEX = 26 * 26 * 26 * 26 * 26 * 26 - 1; 

    // This method converts the index to its respective alphabetical part
    private getAlphaPartFromIndex(index: number): string {
        let alphaPart = '';
        while (index > 0) {
            index--;
            // Calculate the remainder to find the corresponding letter in the alphabet
            const remainder = index % 26;
            // Add the corresponding letter to the alphabetical part of the plate
            alphaPart = this.ALPHABET.charAt(remainder) + alphaPart;
            // Divide the index by 26 to process the next alphabetical "digit"
            index = Math.floor(index / 26);
        }
        return alphaPart;
    }
    

    // This method takes an index and generates the license plate according to the defined pattern
    public getLicensePlate(index: number): Observable<string> {
        if (index < 0 || index > this.MAX_INDEX) {
            return of('Invalid index');
        }

        // Calculate numeric and alpha parts based on the index
        const numericPart = index % 1000000;
        const alphaPartIndex = Math.floor(index / 1000000);
        const alphaPartString = this.getAlphaPartFromIndex(alphaPartIndex);

        // Generate the license plate string by combining numeric and alpha parts
        const plate = numericPart.toString().padStart(6 - alphaPartString.length, '0') + alphaPartString;

        // Return the license plate as an observable
        return of(plate);
    }

}
