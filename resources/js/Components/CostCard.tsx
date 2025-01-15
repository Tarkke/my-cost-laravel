import type { Cost } from '@/types/cost'
import { CostType } from '@/enums.ts'
import { formatAmount } from '@/utils/amount.ts'
import { formatTime } from '@/utils/time.ts'
import { Card, Flex } from 'antd'

interface Props {
    cost: Cost
    onClick?: (cost: Cost) => void
}

export default function CostCard({ cost, onClick }: Props) {
    return (
        <Card hoverable onClick={() => onClick?.(cost)}>
            <Flex justify="space-between">
                <div>
                    <div className="text-base font-medium">
                        {cost.type === 0 ? '支出' : '收入'}
                    </div>
                    <div className="text-gray-500">
                        <span>{formatTime(cost.time, 'time')}</span>
                        {cost.remark && <span> · {cost.remark}</span>}
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div className="text-base font-medium">
                        {cost.type === CostType.Cost ? '-' : '+'}
                        {formatAmount(cost.amount)}
                    </div>
                </div>
            </Flex>
        </Card>
    )
}
