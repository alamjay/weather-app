// output Today, Tomorrow and the rest of the days
export const printDay = (index: any, forecast: any) => {
    if (index === 0) {
        return 'Today';
    } else if (index === 1) {
        return 'Tomorrow';
    } else {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const utcTimestamp = parseInt(forecast.dt) * 1000
        const date = new Date(utcTimestamp);
        return days[date.getDay()];
    }
}