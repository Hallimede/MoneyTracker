import * as React from 'react';
import ListView from '../components/ListView';

interface IState {
    list: []
}

class List extends React.Component<{}, IState> {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        fetch("/summary/all")
            .then(res => res.json())
            .then((result) => {
                console.log("api call ", JSON.stringify(result));
                this.setState({
                    list: result.list
                });
                console.log("look at list:", this.state.list);
            },
                (error) => {
                    console.log("api call ", error);
                })
    }

    render() {
        return (
            <div>{
                this.state.list.length > 0
                    ?
                    <ul>{
                        this.state.list.map((element, index) => { return <ListView key={index} data={element}></ListView> })
                    }</ul>
                    :
                    <div>No data</div>}
            </div>
        )
    }
}

export default List;