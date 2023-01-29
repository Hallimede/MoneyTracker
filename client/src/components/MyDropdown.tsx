import React from 'react';
import { Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

export interface IInputNumberProps {
    catagory: number,
    onCatagoryChange: (catagory: number) => void,
    items: Array<{ label: string, key: number }>
}

export const MyDropdown: React.FC<IInputNumberProps> = (props: IInputNumberProps) => {

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        props.onCatagoryChange(parseInt(key));
    };

    const menu = {
        items: props.items.filter((i) => i.key !== 0),
        onClick: handleMenuClick
    }

    const findCata = (props.items.find(i => i.key === props.catagory))?.label
    const selected = findCata ? findCata : 'Select One';
    return (
        <Dropdown menu={menu} >
            <Button style={{
                width: '120px',
                border: '2px solid',
                borderRadius: '0px'
            }} size="large">
                <Space>
                    {selected}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown >
    )
}