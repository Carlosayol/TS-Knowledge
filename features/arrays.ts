const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

carMakers.push('subaru')

carMakers.map((car: string): string => {
    return car.toUpperCase()
})


// Flexible array types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']

