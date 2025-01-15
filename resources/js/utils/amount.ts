import Currency from 'currency.js'

type Amount = string | number | Currency

export function formatAmount(amount: Amount) {
    return Currency(amount, { fromCents: true, symbol: '￥' }).format()
}

export function parseAmount(amount: Amount) {
    return Currency(amount).intValue
}

export function getAmount(amount: Amount) {
    return Currency(amount, { fromCents: true }).value
}
