class Time {
    static getCurrentTime(): number {
        return Date.now();
    }

    // Formats a unixTime number to a string "MM/DD/YY"
    // Returns a string
    static formatTime(unixTime: number) {
        const date = new Date(unixTime);
        const year = date.getFullYear() % 100;
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}/${year}`;
    }
}

export default Time;