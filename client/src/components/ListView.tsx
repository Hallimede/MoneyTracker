import * as React from 'react';

interface IProps {
    data: {
        no: number,
        name: string
    }
}

class ListView extends React.Component<IProps>{
    render() {
        const { no, name } = this.props.data;
        return (
            <div>
                <span>{no}:</span>
                <span>{name}</span>
            </div>
        )
    }
}

export default ListView;