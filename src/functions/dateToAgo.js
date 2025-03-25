export function dateToAgo(date) {
    const units = [
        { div: 31536000, text: 'years' },
        { div: 2592000, text: 'months' },
        { div: 86400, text: 'days' },
        { div: 3600, text: 'hours' },
        { div: 60, text: 'minutes' },
        { div: 1, text: 'seconds' }
    ];
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    const unit = units.find(u => seconds >= u.div);
    return `${Math.floor(seconds / (unit?.div || 1))} ${unit?.text} ago`;
}

export function getYear(date) {
    return new Date(date).getFullYear();
}