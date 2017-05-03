import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterable'
})
export class MapToIterablePipe implements PipeTransform {



  transform(value: any, args?: any): any {
    //return null;
    if (value==null) {
        return null;
    }
    return Object.keys(value).map(function(key) {
            let pair = {};
            let k = 'key';
            let v = 'value'
                pair[k] = key;
                pair[v] = value[key];
        return pair;
    });
  }

  again(values){
    let newValues= this.transform(values);
    console.log("again ",newValues)
    return newValues;
  }
}
