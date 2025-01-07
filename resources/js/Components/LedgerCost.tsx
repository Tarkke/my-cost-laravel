import { Card, Flex } from 'antd'
import { formatAmount } from '@/utils/amount.ts'
import { formatTime } from '@/utils/time.ts'
import { Cost } from '@/types/cost'

type Props = {
    cost: Cost
}

export default function LedgerCost({ cost }: Props) {
    return (
        <Card bordered={false} hoverable={true}>
            <Flex justify="space-between">
                <div>
                    <div className="text-base font-medium">
                        {cost.type === 0 ? '支出' : '收入'}
                    </div>
                    <div className="text-gray-500">
                        <span>{formatTime(cost.time)}</span>
                        {cost.remark && <span> · {cost.remark}</span>}
                    </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div className="text-base font-medium">
                        {formatAmount(cost.amount, cost.type)}
                    </div>
                </div>
            </Flex>
        </Card>
    )
}
