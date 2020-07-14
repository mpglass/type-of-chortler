import * as React from 'react';

class Admin extends React.Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props); 
        this.state = {};
    }
    render(){
        return(
            <main className="container">
                <div className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center">Admin Page</h1>
                </div>
            </main>
        )
    }
}

interface AdminProps {}
interface AdminState {}

export default Admin; 