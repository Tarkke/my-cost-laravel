import currency from 'currency.js'
import { CostType } from '@/enums.ts'

export function formatAmount(value: string | number, type: CostType) {
    let pattern = '!#'
    switch (type) {
        case CostType.Cost:
            pattern = `-${pattern}`
            break
        case CostType.Income:
            pattern = `+${pattern}`
            break
        default:
            pattern = `${pattern}`
            break
    }
    return currency(value, {
        fromCents: true,
        symbol: '￥',
        pattern,
    }).format()
}
