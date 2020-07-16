import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import type { IChortle } from '../utils/interfaces'
import { Link } from 'react-router-dom';

class Admin extends React.Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props); 
        this.state = {
            name: '',
            mewsings: '',
          };
        }
      
        async componentDidMount(){
            const res = await fetch('/api/chortles/' + this.props.match.params.chortleid);
            const chortle: IChortle = await res.json();
            this.setState({ name: chortle.name, mewsings: chortle.mewsings });
        }

        handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          this.setState({ name: e.target.value });
        };
      
        handleMewsingsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
          this.setState({ mewsings: e.target.value });
        };

        handleDeleteChortle = async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault(); 
          const res = await fetch(`/api/chortles/${this.props.match.params.chortleid}`, {
            method: 'DELETE'
          });
          const reply = await res.json(); 
          console.log(reply.msg)
          this.props.history.push('/');
        };

        handleChortleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          const res = await fetch(`/api/chortles/${this.props.match.params.chortleid}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.state.name,
              mewsings: this.state.mewsings,
            }),
          });
          const confirm = await res.json();
          console.log(confirm.msg);
          this.props.history.push(`/details/${this.props.match.params.chortleid}`);
        };

   


    render(){
        return(
            <section className="row justify-content-center mt-5">
            <div className="col-md-10">
              <form className="form-group p-3 border border-warning rounded-lg shadow-sm">
                <label htmlFor="name" className="text-secondary">Name</label>
                <input
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  type="text"
                  className="form-control my-1"
                />
                <label htmlFor="mewsings" className="text-info">Mewsings</label>
                <textarea
                  value={this.state.mewsings}
                  onChange={this.handleMewsingsChange}
                  rows={10}
                  className="form-control my-1"
                />
                <button
                  onClick={this.handleChortleEdit}
                  className="btn btn-success btn-block mt-3 mx-auto w-50"
                >
                 Save Changes
                </button>
                <button
                  onClick={this.handleDeleteChortle}
                  className="btn btn-danger btn-block mt-3 mx-auto w-50"
                >
                  Delete Chortle
                </button>
                <Link
                  to={`/details/${this.props.match.params.chortleid}`}
                  className="btn btn-warning btn-block mt-3 mx-auto w-50"
                >
                  Back to Chortle
                </Link>
              </form>
            </div>
          </section>
        )
    }
}

interface AdminProps extends RouteComponentProps<{ chortleid: string }> {}
interface AdminState {
    name: string;
    mewsings: string;
}

export default Admin; 