import * as React from 'react';

interface IProps {
    title: string
}

interface IState {
    count: number
}

export default class Hello extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        };
        this.clickHandler = this.clickHandler.bind(this);

    }

    clickHandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        const { title } = this.props;
        return (
            <div>
                <div>
                    Hello World {title}
                </div>
                <div>
                    {this.state.count}
                </div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}