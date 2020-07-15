import * as React from 'react';

class Compose extends React.Component<ComposeProps, ComposeState> {
    constructor(props: ComposeProps) {
        super(props); 
        this.state = {};
    }
    render(){
        return(
                <div className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center">Compose Page</h1>
                </div>
        )
    }
}

interface ComposeProps {}
interface ComposeState {}

export default Compose; 