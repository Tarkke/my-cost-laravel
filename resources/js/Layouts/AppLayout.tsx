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
                <Content
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 24,
                        paddingBottom: 0,
                    }}
                >
                    <div
                        style={{
                            marginBottom: 24,
                            fontSize: 24,
                            fontWeight: 'bold',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            flex: 1,
                            padding: 24,
                            overflowY: 'auto',
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
