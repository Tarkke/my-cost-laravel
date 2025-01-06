import { Head } from '@inertiajs/react'
import { PropsWithChildren } from 'react'
import NavMenu from '@/Components/NavMenu.tsx'
import { Layout, theme } from 'antd'

const { Content, Footer, Sider } = Layout

export default function AppLayout({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout className="h-screen w-full">
            <Head title={title} />
            <Sider breakpoint="lg" theme="light">
                <NavMenu />
            </Sider>
            <Layout>
                <Content style={{ padding: '24px' }}>
                    <div
                        style={{
                            marginBottom: '24px',
                            fontSize: '24px',
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    MyCost ©{new Date().getFullYear()} Created by{' '}
                    <a
                        href="https://github.com/Tarkke"
                        target="_blank"
                        className="underline"
                    >
                        Tarkke
                    </a>
                </Footer>
            </Layout>
        </Layout>
    )
}
