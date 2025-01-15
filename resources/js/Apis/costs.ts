import type { CostDto } from '@/types/cost'
import request from '@/utils/request.ts'

export function createCost(costDto: CostDto) {
    return request.post('/costs', costDto)
}

export function updateCost(id: number, costDto: CostDto) {
    return request.patch(`/costs/${id}`, costDto)
}

export function removeCost(id: number) {
    return request.del(`/costs/${id}`)
}
