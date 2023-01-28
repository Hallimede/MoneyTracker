import * as React from 'react';

interface IProps {
    title: string,
    onMyClick: Function
}

interface IState {
    count: number
}

class Hello extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            count: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.msgHandler = this.msgHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            count: this.state.count + 1
        });
    }

    msgHandler() {
        this.props.onMyClick("pass a parameter");
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
                <button onClick={this.msgHandler}>Send Msg</button>
            </div>
        )
    }
}

export default Hello;