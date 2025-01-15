import type { PageProps } from '@/types'
import type { Cost, CostDto } from '@/types/cost'
import { createCost, removeCost, updateCost } from '@/Apis/costs.ts'
import CostCard from '@/Components/CostCard.tsx'
import { CostType } from '@/enums.ts'
import AppLayout from '@/Layouts/AppLayout.tsx'
import { getAmount, parseAmount } from '@/utils/amount.ts'
import { formatTime, getNow } from '@/utils/time.ts'
import {
    DrawerForm,
    PageContainer,
    ProFormDateTimePicker,
    ProFormDigit,
    ProFormRadio,
    ProFormText,
    ProFormTextArea,
} from '@ant-design/pro-components'
import { Button, Col, Form, message, Row } from 'antd'
import { useState } from 'react'

type Props = PageProps<{
    costs: Cost[]
}>

export default function Ledger({ costs }: Props) {
    const [open, setOpen] = useState(false)
    const [form] = Form.useForm<CostDto>()
    const [messageApi, contextHolder] = message.useMessage()
    const [deleteLoading, setDeleteLoading] = useState(false)

    const openForm = (cost?: Cost) => {
        if (cost) {
            form.setFieldsValue({
                id: cost.id,
                type: cost.type,
                amount: getAmount(cost.amount),
                time: formatTime(cost.time),
                remark: cost.remark,
            })
        } else {
            form.setFieldsValue({
                type: CostType.Cost,
                time: getNow(),
            })
        }
        setOpen(true)
    }

    const closeForm = () => {
        setOpen(false)
        setDeleteLoading(false)
        form.resetFields()
    }

    const onFinish = async (values: CostDto) => {
        const { id, ...data } = values
        data.amount = parseAmount(values.amount)
        try {
            if (id) {
                await updateCost(id, data)
            } else {
                await createCost(data)
            }
            messageApi.success('保存成功')
            return true
        } catch (errors: any) {
            Object.values(errors).forEach((error) => {
                messageApi.error(error as string)
            })
            return false
        }
    }

    const onDelete = (id: number) => {
        setDeleteLoading(true)
        removeCost(id).then(async () => {
            messageApi.success('删除成功')
            closeForm()
        })
    }

    return (
        <AppLayout title="账本">
            {contextHolder}
            <PageContainer
                title="账本"
                extra={
                    <Button type="primary" onClick={() => openForm()}>
                        记一笔
                    </Button>
                }
            >
                <Row gutter={[16, 16]}>
                    {costs.map((cost) => (
                        <Col
                            xs={24}
                            sm={12}
                            lg={12}
                            xl={8}
                            xxl={6}
                            key={cost.id}
                        >
                            <CostCard cost={cost} onClick={openForm} />
                        </Col>
                    ))}
                </Row>
            </PageContainer>
            <Form form={form} />
            <DrawerForm<CostDto>
                title={form.getFieldValue('id') ? '编辑账单' : '记一笔'}
                open={open}
                onOpenChange={(open) => {
                    !open && closeForm()
                }}
                onFinish={onFinish}
                form={form}
                submitter={{
                    render: (_, defaultDoms) => {
                        return [
                            form?.getFieldValue('id') && (
                                <Button
                                    key="delete"
                                    type="text"
                                    danger
                                    onClick={() => {
                                        onDelete(form?.getFieldValue('id'))
                                    }}
                                    loading={deleteLoading}
                                >
                                    删除
                                </Button>
                            ),
                            ...defaultDoms,
                        ]
                    },
                }}
            >
                <ProFormText name="id" hidden />
                <ProFormRadio.Group
                    options={[
                        {
                            label: '支出',
                            value: CostType.Cost,
                        },
                        {
                            label: '收入',
                            value: CostType.Income,
                        },
                    ]}
                    name="type"
                    radioType="button"
                    rules={[
                        {
                            required: true,
                            message: '请选择类型',
                        },
                    ]}
                />
                <ProFormDigit
                    addonBefore="￥"
                    label="金额"
                    name="amount"
                    min={0}
                    fieldProps={{ precision: 2 }}
                    rules={[
                        {
                            required: true,
                            message: '请输入金额',
                        },
                    ]}
                />
                <ProFormDateTimePicker
                    label="时间"
                    name="time"
                    fieldProps={{
                        format: 'YYYY-MM-DD HH:mm',
                    }}
                    rules={[
                        {
                            required: true,
                            message: '请选择时间',
                        },
                    ]}
                />
                <ProFormTextArea
                    label="备注"
                    name="remark"
                    placeholder="可不填"
                    fieldProps={{
                        maxLength: 100,
                    }}
                />
            </DrawerForm>
        </AppLayout>
    )
}
