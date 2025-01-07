import dayjs from 'dayjs'

export function formatTime(date: string | Date) {
    return dayjs(date).format('HH:mm')
}
