export function isInThePast(date: number | Date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date < today;
}
export function isToday(date1: number | Date, date2: number | Date) {
    return date1 < date2;
}