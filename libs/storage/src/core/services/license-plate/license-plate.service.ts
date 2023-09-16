// license-plate.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class LicensePlateService {


    calculate(index: number): Observable<string> {
        return of(this.generateLicensePlate(index));
    }

    private generateLicensePlate(index: number): string {
        if (index < 1) {
            throw new Error("Index out of bounds");
        }
    
        const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let remainingIndex = index - 1;
    
        let plateNumber = '';
        for (let i = 0; i < 6; i++) {
            const base = i === 0 ? 10 : 36; // Os dígitos numéricos vão de 0-9, enquanto os caracteres alfabéticos vão de A-Z
            const charIndex = remainingIndex % base;
            plateNumber = alphabet[charIndex] + plateNumber;
            remainingIndex = Math.floor(remainingIndex / base);
            if (i === 0) {
                remainingIndex += 100000 * (alphabet.indexOf('A') - 10);
            }
        }
    
        return plateNumber;
    }
    
    

    // private generateLicensePlate(index: number): string {
    //     if (index < 1) {
    //         throw new Error("Index out of bounds");
    //     }
    
    //     const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     let remainingIndex = index - 1; // Ajustamos para uma base 0
    //     let plateNumber = '';
    
    //     for (let i = 0; i < 6; i++) {
    //         const base = 36; // O número de caracteres possíveis em cada posição
    //         const charIndex = remainingIndex % base;
    //         plateNumber = alphabet[charIndex] + plateNumber;
    //         remainingIndex = Math.floor(remainingIndex / base);
    //     }
    
    //     return plateNumber;
    // }
    
}
