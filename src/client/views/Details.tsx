import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import type { IChortle } from '../utils/interfaces';

class Details extends React.Component<DetailsProps, DetailsState> {
    constructor(props: DetailsProps) {
        super(props); 
        this.state = {
            chortle: null
        };
    }

    async componentDidMount(){
        const res = await fetch('/api/chortles/' + this.props.match.params.chortleid);
        const chortle = await res.json();
        this.setState({ chortle });
    }

    render(){
        return(
                <div className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center"> {this.state.chortle?.name} </h1>
                    <h1>{this.state.chortle?.mewsings}</h1>
                </div>
        )
    }
}

interface DetailsProps extends RouteComponentProps<{ chortleid: string }> {}
interface DetailsState {
chortle: IChortle
}

export default Details; 