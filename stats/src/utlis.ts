export const dateStringToDate = (date_string: string): Date => {
    // 28/10/2018
    const date_parts = date_string.split('/').map(each => +each)
    return new Date(date_parts[2], date_parts[1] - 1, date_parts[0])
}