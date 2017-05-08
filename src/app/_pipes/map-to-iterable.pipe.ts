import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {
   transform(value: any, args?: any): any {
    if (value==null) {
        return null;
    }
    return Object.keys(value).map(function(key) {
            let pair = {};
            let k = 'key';
            let v = 'value';
            let t = 'type';
            pair[k] = key;
            pair[v] = value[key];
            pair[t] = typeof value[key];
        return pair;
    });
  }

  
}
