import React from 'react';
import { Dropdown, Button, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Category } from '../utils/category';

export interface IInputNumberProps {
    catagory: number,
    onCatagoryChange: (catagory: number) => void,
}

export const MyDropdown: React.FC<IInputNumberProps> = (props: IInputNumberProps) => {

    const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
        props.onCatagoryChange(parseInt(key));
    };

    const menu = {
        items: Category.ITEMS.filter((i) => i.key !== 0),
        onClick: handleMenuClick
    }

    return (
        <Dropdown menu={menu} >
            <Button style={{
                width: '120px',
                border: '2px solid',
                borderRadius: '0px'
            }} size="large">
                <Space>
                    {Category.getCategoryString(props.catagory, 'Select One')}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown >
    )
}