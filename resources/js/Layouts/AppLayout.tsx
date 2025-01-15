import type { PropsWithChildren } from 'react'
import { AccountBookOutlined } from '@ant-design/icons'
import { ProLayout } from '@ant-design/pro-components'
import { Head } from '@inertiajs/react'

const route = {
    routes: [
        {
            path: '/ledgers',
            name: '账本',
            icon: <AccountBookOutlined />,
        },
    ],
}

export default function AppLayout({
    children,
    title,
}: PropsWithChildren<{ title: string }>) {
    return (
        <div className="h-screen">
            <Head title={title} />
            <ProLayout title="MyCost" route={route}>
                {children}
            </ProLayout>
        </div>
    )
}
