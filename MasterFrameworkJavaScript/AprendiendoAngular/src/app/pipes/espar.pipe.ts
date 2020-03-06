import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{
    transform(value: any) {
        
        var espar = " no es par";
        if(value % 2 == 0) {
            espar = " si que es par";
        }
        return "El year es " + value + " y " + espar;
    }
}