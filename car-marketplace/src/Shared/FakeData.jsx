import { faker } from '@faker-js/faker';

function createRandomCarList(){
    return {
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:"https://www.motortrend.com/uploads/2023/09/002-2024-BMW-i5-front-three-quarters-in-action.jpg",
        miles: 1000,
        price: faker.finance.amount({ min: 1000, max: 20000 }),
        year: faker.date.past(10).getFullYear(),
        color: faker.vehicle.color(),
        gearType: "Automatic",
        location: faker.address.city(),
    }

}

const carList = faker.helpers.multiple(createRandomCarList,{count:7})

export default {
    carList
};