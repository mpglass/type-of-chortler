import * as React from 'react';

class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props); 
        this.state = {};
    }
    render(){
        return(
            <main className="container">
                <div className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center">Home Page</h1>
                </div>
            </main>
        )
    }
}

interface HomeProps {}
interface HomeState {}

export default Home; 