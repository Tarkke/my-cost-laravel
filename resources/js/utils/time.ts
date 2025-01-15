import dayjs from 'dayjs'

const formatRule = {
    date: 'YYYY-MM-DD',
    time: 'HH:mm',
    datetime: 'YYYY-MM-DD HH:mm',
}

type Datetime = string | Date | dayjs.Dayjs
type FormatType = keyof typeof formatRule

export function formatTime(datetime: Datetime, type: FormatType = 'datetime') {
    return dayjs(datetime).format(formatRule[type])
}

export function getNow(type: FormatType = 'datetime') {
    return formatTime(dayjs(), type)
}
