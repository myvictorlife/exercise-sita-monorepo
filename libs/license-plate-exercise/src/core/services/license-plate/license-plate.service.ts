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
    // This method takes an index as input and returns the corresponding license plate as an observable string.
    public getLicensePlate(index: number): Observable<string> {
        // Check if the index is within a valid range, if not, return an observable with 'Invalid index'.
        if (index < 0 || index > this.MAX_INDEX) {
            return of('Invalid index');
        }

        // Calculate the alpha and numeric parts of the license plate based on the index.
        let alphaIndex = Math.floor(index / 1000000);
        let numericIndex = index % 1000000;

        // Adjust the alpha and numeric indexes if the initial index is equal to or greater than 1000000.
        if (index >= 1000000) {
            alphaIndex += Math.floor((numericIndex) / 100000);
            numericIndex = numericIndex % 100000;
        }

        // Get the alphabetic part of the license plate using the calculated alpha index.
        const alphaPartString = this.getAlphaPartFromIndex(alphaIndex);

        // Create the numeric part of the license plate, padding with zeros if necessary to maintain a length of 6 minus the length of the alphabetic part.
        const numericPart = numericIndex.toString().padStart(6 - alphaPartString.length, '0');

        // Concatenate the numeric and alphabetic parts to create the full license plate.
        const plate = numericPart + alphaPartString;

        // Return the license plate as an observable string.
        return of(plate);
    }

    // This private method takes an alpha index as input and returns the corresponding alphabetic part of a license plate.
    private getAlphaPartFromIndex(index: number): string {
        let alphaPart = '';
        // Loop to calculate the alphabetic part of the license plate using the input index.
        while (index > 0) {
            index--;
            const remainder = index % 26;
            // Construct the alphabetic part by adding characters from the alphabet based on the remainder of the index divided by 26.
            alphaPart = this.ALPHABET.charAt(remainder) + alphaPart;
            // Update the index for the next iteration.
            index = Math.floor(index / 26);
        }
        // Return the constructed alphabetic part.
        return alphaPart;
    }


}