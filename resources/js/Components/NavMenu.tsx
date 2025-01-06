import { AccountBookOutlined } from '@ant-design/icons'
import type { GetProp, MenuProps } from 'antd'
import { Menu } from 'antd'

type MenuItem = GetProp<MenuProps, 'items'>[number]

const items: MenuItem[] = [
    {
        key: 'ledger',
        icon: <AccountBookOutlined />,
        label: '账本',
    },
]

export default function NavMenu() {
    return <Menu theme="light" items={items} defaultSelectedKeys={['ledger']} />
}
