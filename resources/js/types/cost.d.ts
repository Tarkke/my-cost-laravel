import type { CostType } from '@/enums.ts'

export interface Cost {
    id: number
    type: CostType
    category: CostCategoryWithParent
    amount: number
    time: string
    remark?: string
}

export interface CostDto {
    id?: number
    type: CostType
    category_id: number
    amount: number
    time: string
    remark?: string
}

export interface CostCategory {
    id: number
    type: CostType
    name: string
}

export type CostCategoryWithParent = CostCategory & {
    parent?: CostCategory
}

export type CostCategoryWithChildren = CostCategory & {
    children?: CostCategory[]
}
