import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import type { IChortle } from '../utils/interfaces';
import {Link} from 'react-router-dom'; 

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
                <section className="row justify-content-center mt-3" >
                   <div className="col-12">
                   <h1 className="text-center">@{this.state.chortle?.name}</h1>
                    <h1 className="text-center">{this.state.chortle?.mewsings}</h1>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to="/">Home</Link>
                        <Link to={`/admin.${this.state.chortle?.id}`}>Admin page</Link>
                    </div>
                   </div>
                </section>
        )
    }
}

interface DetailsProps extends RouteComponentProps<{ chortleid: string }> {}
interface DetailsState {
chortle: IChortle
}

export default Details; 