const add = (a: number, b: number): number => {
    return a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const logger = (msg: string): void => {
    console.log(msg);
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

// ES2015

const logWeather1 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
}

logWeather1(forecast)