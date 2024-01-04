export default function currentDateToColor() {
    const monthlyColor = {
        0: "#ffb3c6",
        1: "#bde0fe",
        2: "#f2e8cf",
        3: "#a7c957",
        4: "#ffafcc",
        5: "#e9edc9",
        6: "#d6ccc2",
        7: "#c8b6ff",
        8: "#f5cac3",
        9: "#f6bd60",
        10: "#80ed99",
        11: "#c77dff",
        12: "#cdcdcd",
    }
    const currentDate = new Date();
    const month =currentDate.getMonth();
    return monthlyColor[month]; 
}

