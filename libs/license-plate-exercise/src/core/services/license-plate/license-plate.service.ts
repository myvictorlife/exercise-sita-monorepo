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
    public getLicensePlate(index: number): Observable<string> {
        if (index < 0 || index > this.MAX_INDEX) {
            return of('Invalid index');
        }
    
        let alphaIndex = Math.floor(index / 1000000);
        let numericIndex = index % 1000000;
    
        if (index >= 1000000) {
            alphaIndex += Math.floor((numericIndex) / 100000);
            numericIndex = numericIndex % 100000;
        }
    
        const alphaPartString = this.getAlphaPartFromIndex(alphaIndex);
        
        const numericPart = numericIndex.toString().padStart(6 - alphaPartString.length, '0');
        
        const plate = numericPart + alphaPartString;
        
        console.log(`Index: ${index} => Plate: ${plate}`)
        
        return of(plate);
    }
    
    private getAlphaPartFromIndex(index: number): string {
        let alphaPart = '';
        while (index > 0) {
            index--;
            let remainder = index % 26;
            alphaPart = this.ALPHABET.charAt(remainder) + alphaPart;
            index = Math.floor(index / 26);
        }
        return alphaPart;
    }

}