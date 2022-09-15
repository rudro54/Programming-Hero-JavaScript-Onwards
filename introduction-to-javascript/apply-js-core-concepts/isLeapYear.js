function isLeapYear(year) {
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('my year :', isMyYearLeapYear);