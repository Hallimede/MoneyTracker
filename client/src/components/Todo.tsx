import React, { useState } from "react";

interface IProps {
    title: string
}

export const Todo: React.FC<IProps> = (props: IProps) => {

    const [items, setItems] = useState<string[]>(["item1", "item2"]);

    return (
        <div>
            <p>{props.title}</p>
            <div>{
                items.map((item) => (<p>{item}</p>))}
                {/* {if(items!=null) items.map((item) => (<p>{item}</p>))} */}
                {/* {items.map(item => {
                    <p>{item}</p>
                })} */}
            </div>
        </div>

    )
}