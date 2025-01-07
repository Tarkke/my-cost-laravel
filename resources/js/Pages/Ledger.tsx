import AppLayout from '@/Layouts/AppLayout.tsx'
import { PageProps } from '@/types'
import LedgerCost from '@/Components/LedgerCost.tsx'
import { Col, Row } from 'antd'
import { Cost } from '@/types/cost'

type Props = PageProps<{
    costs: Cost[]
}>

export default function Ledger({ costs }: Props) {
    console.log(costs)
    return (
        <AppLayout title="账本">
            <Row gutter={[16, 16]}>
                {costs.map((cost) => (
                    <Col span={6} key={cost.id}>
                        <LedgerCost cost={cost} />
                    </Col>
                ))}
            </Row>
        </AppLayout>
    )
}
