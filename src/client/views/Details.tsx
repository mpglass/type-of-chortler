import * as React from 'react';

class Details extends React.Component<DetailsProps, DetailsState> {
    constructor(props: DetailsProps) {
        super(props); 
        this.state = {};
    }
    render(){
        return(
            <main className="container">
                <div className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center">Details Page</h1>
                </div>
            </main>
        )
    }
}

interface DetailsProps {}
interface DetailsState {}

export default Details; 