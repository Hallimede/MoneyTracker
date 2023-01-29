import React from 'react';
import { Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export interface IInputNumberProps {
    amount: number,
    onValueChange: (value: number) => void
}

export const MyDropdown: React.FC<IInputNumberProps> = (props: IInputNumberProps) => {


    const items = [
        {
            label: 'Select One',
            key: 0
        },
        {
            label: 'Bills',
            key: 1
        },
        {
            label: 'Grocery',
            key: 2
        }]

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        props.onValueChange(parseInt(key))
    };

    const menu = {
        items: items.filter((i) => i.key !== 0),
        onClick: handleMenuClick
    }

    return (
        <Dropdown menu={menu}>
            <Button style={{
                width: '120px',
                border: '2px solid',
                borderRadius: '0px'
            }} size="large">
                <Space>
                    {(items.find(i => i.key === props.amount))?.label}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>

    )
}