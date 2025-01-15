import type { CostType } from '@/enums.ts'

export interface Cost {
    id: number
    type: CostType
    amount: number
    time: string
    remark?: string
}

export interface CostDto {
    id?: number
    type: CostType
    amount: number
    time: string
    remark?: string
}
