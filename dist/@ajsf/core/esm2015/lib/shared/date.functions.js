import { longDays, longMonths, shortDays, shortMonths } from '../locale-dates/en-US';
/**
 *
 * @param date
 * @param options
 * return a date string which follows the JSON schema standard
 */
export function dateToString(date, options = {}) {
    const dateFormat = options.dateFormat || 'YYYY-MM-DD';
    // TODO: Use options.locale to change default format and names
    // const locale = options.locale || 'en-US';
    date = new Date(date || undefined);
    if (!date.getDate()) {
        return null;
    }
    const year = date.getFullYear().toString();
    const month = date.getMonth();
    const day = date.getDate();
    const dayOfWeek = date.getDay();
    return dateFormat
        .replace(/S/g, getOrdinal(day))
        .replace(/YYYY/g, year)
        .replace(/YY/g, year.slice(-2))
        .replace(/MMMM/g, longMonths[month])
        .replace(/MMM/g, shortMonths[month])
        .replace(/MM/g, ('0' + (month + 1)).slice(-2))
        .replace(/M/g, month + 1)
        .replace(/DDDD/g, longDays[dayOfWeek])
        .replace(/DDD/g, shortDays[dayOfWeek])
        .replace(/DD/g, ('0' + day).slice(-2))
        .replace(/D/g, day);
}
export function getOrdinal(day) {
    if (day > 3 && day < 21) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5mdW5jdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hanNmLWNvcmUvc3JjL2xpYi9zaGFyZWQvZGF0ZS5mdW5jdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXJGOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLFlBQVksQ0FBQyxJQUFtQixFQUFFLFVBQWUsRUFBRTtJQUNqRSxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQztJQUN0RCw4REFBOEQ7SUFDOUQsNENBQTRDO0lBQzVDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDO0tBQUU7SUFDckMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hDLE9BQU8sVUFBVTtTQUNkLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzlCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDO1NBQ3RCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDeEIsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVc7SUFDcEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQztLQUFFO0lBQ3pDLFFBQVEsR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNoQixLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQztRQUNwQixPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQztLQUN0QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb25nRGF5cywgbG9uZ01vbnRocywgc2hvcnREYXlzLCBzaG9ydE1vbnRocyB9IGZyb20gJy4uL2xvY2FsZS1kYXRlcy9lbi1VUyc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBkYXRlXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogcmV0dXJuIGEgZGF0ZSBzdHJpbmcgd2hpY2ggZm9sbG93cyB0aGUgSlNPTiBzY2hlbWEgc3RhbmRhcmRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1N0cmluZyhkYXRlOiBzdHJpbmcgfCBEYXRlLCBvcHRpb25zOiBhbnkgPSB7fSk6IHN0cmluZyB7XG4gIGNvbnN0IGRhdGVGb3JtYXQgPSBvcHRpb25zLmRhdGVGb3JtYXQgfHwgJ1lZWVktTU0tREQnO1xuICAvLyBUT0RPOiBVc2Ugb3B0aW9ucy5sb2NhbGUgdG8gY2hhbmdlIGRlZmF1bHQgZm9ybWF0IGFuZCBuYW1lc1xuICAvLyBjb25zdCBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCAnZW4tVVMnO1xuICBkYXRlID0gbmV3IERhdGUoZGF0ZSB8fCB1bmRlZmluZWQpO1xuICBpZiAoIWRhdGUuZ2V0RGF0ZSgpKSB7IHJldHVybiBudWxsOyB9XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF0ZUZvcm1hdFxuICAgIC5yZXBsYWNlKC9TL2csIGdldE9yZGluYWwoZGF5KSlcbiAgICAucmVwbGFjZSgvWVlZWS9nLCB5ZWFyKVxuICAgIC5yZXBsYWNlKC9ZWS9nLCB5ZWFyLnNsaWNlKC0yKSlcbiAgICAucmVwbGFjZSgvTU1NTS9nLCBsb25nTW9udGhzW21vbnRoXSlcbiAgICAucmVwbGFjZSgvTU1NL2csIHNob3J0TW9udGhzW21vbnRoXSlcbiAgICAucmVwbGFjZSgvTU0vZywgKCcwJyArIChtb250aCArIDEpKS5zbGljZSgtMikpXG4gICAgLnJlcGxhY2UoL00vZywgbW9udGggKyAxKVxuICAgIC5yZXBsYWNlKC9EREREL2csIGxvbmdEYXlzW2RheU9mV2Vla10pXG4gICAgLnJlcGxhY2UoL0RERC9nLCBzaG9ydERheXNbZGF5T2ZXZWVrXSlcbiAgICAucmVwbGFjZSgvREQvZywgKCcwJyArIGRheSkuc2xpY2UoLTIpKVxuICAgIC5yZXBsYWNlKC9EL2csIGRheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsKGRheTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGRheSA+IDMgJiYgZGF5IDwgMjEpIHsgcmV0dXJuICd0aCc7IH1cbiAgc3dpdGNoIChkYXkgJSAxMCkge1xuICAgIGNhc2UgMTogcmV0dXJuICdzdCc7XG4gICAgY2FzZSAyOiByZXR1cm4gJ25kJztcbiAgICBjYXNlIDM6IHJldHVybiAncmQnO1xuICAgIGRlZmF1bHQ6IHJldHVybiAndGgnO1xuICB9XG59XG4iXX0=