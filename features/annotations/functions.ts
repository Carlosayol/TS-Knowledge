const add = (a: number, b: number): number => {
    return a + b
}

function divide (a: number, b: number): number {
    return a / b
}

const logger = (message: string) : void => {
    console.log(message)
}

// never is a keyword in TypeScript that is used to indicate that a 
// function will never reach its end.

const throwError = (message: string) : never => {
    throw new Error(message)
}

const forecast = {
    date: new Date(),
    weather: "cloudy",  
}

const logForecast = ({date, weather} : {date: Date, weather: string}): void => {
    console.log(`The weather will be ${weather} on ${date.toString()}`)
}

logForecast(forecast)
