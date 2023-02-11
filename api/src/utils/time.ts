class Time {
    static getCurrentTime(): number {
        return Date.now();
    }

    // Formats a unixTime number to a string "MM/DD/YY"
    // Returns a string
    static formatTime(unixTime: number): string {
        const date: Date = new Date(unixTime);
        const year: number = date.getFullYear() % 100;
        const month: number = date.getMonth() + 1;
        const day: number = date.getDate();
        return `${month}/${day}/${year}`;
    }
}

export default Time;