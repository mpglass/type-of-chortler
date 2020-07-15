import * as React from 'react';
import * as moment from 'moment';
import { RouteComponentProps } from 'react-router-dom';
import type { IChortle } from '../utils/interfaces';

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props); 
        this.state = {
            chortles: []
        };
    }
    async componentDidMount(){
        const res = await fetch('/api/chortles');
        const chortles = await res.json();
        this.setState({ chortles });
    }

    render(){
        return(
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                            {this.state.chortles.map((chortle) => (
                                <li onClick={() => this.props.history.push(`/details/${chortle.id}`)} className="list-group-item py-5" key={`chirp-li-${chortle.id}`}>
                                    <h6>@{chortle.name}</h6>
                                    <br />
                            <p>{chortle.mewsings}</p>
                            <br />
                            <small className="text-muted">
                                <i>
                                    ~{moment(chortle.written_at).format('MMMM Do YYYY, h:mm:ss a')}
                                </i>
                            </small>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
        )
    }
}


interface HomeProps extends RouteComponentProps {}
interface HomeState {
chortles: IChortle[]
}

export default Home; 