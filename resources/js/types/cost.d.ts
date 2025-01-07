import { CostType } from '@/enums.ts'

export interface Cost {
    id: number
    type: CostType
    amount: number
    time: Date
    remark?: string
}
