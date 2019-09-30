import * as faker from 'faker';

export class DataService {

    static async getData(n: number){
        let data = [];
        for(let i=0;i<n;i++){
            let dateTime = faker.date.recent(50);
            let name = faker.name.firstName();
            let value = faker.random.number();
            let occurrences = faker.random.number(40);
            data.push({dateTime,name,value,occurrences});
        }
        return data;
    }
}
