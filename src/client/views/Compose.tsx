import * as React from "react";
import e from "express";
import { RouteComponentProps } from "react-router-dom";

class Compose extends React.Component<ComposeProps, ComposeState> {
  constructor(props: ComposeProps) {
    super(props);
    this.state = {
      name: "",
      mewsings: "",
    };
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };

  handleMewsingsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ mewsings: e.target.value });
  };

  handleChortleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch("/api/chortles", {
      method: "POST",
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
    this.props.history.push("/");
  };

  render() {
    return (
      <section className="row justify-content-center mt-5">
        <div className="col-md-10">
          <form className="form-group p-3 border border-info rounded-lg shadow">
            <label htmlFor="name" className="text-secondary">Name</label>
            <input
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              className="form-control my-1"
            />
            <label htmlFor="mewsings" className="text-warning">Mewsings</label>
            <textarea
              value={this.state.mewsings}
              onChange={this.handleMewsingsChange}
              rows={10}
              className="form-control my-1"
            />
            <button
              onClick={this.handleChortleSubmit}
              className="btn btn-success btn-block mt-3 mx-auto w-50"
            >
              Post
            </button>
          </form>
        </div>
      </section>
    );
  }
}

interface ComposeProps extends RouteComponentProps {}
interface ComposeState {
  name: string;
  mewsings: string;
}

export default Compose;
