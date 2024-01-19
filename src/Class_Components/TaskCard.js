import React from 'react';

class TaskCard extends React.Component{

    // first constructor render 
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            title:"promoting for business 1",
            budget:40,
            type:"Remote",
            timeAgo:"15 Hours Ago"
        };
    }

    // 2nd getDerivedStateFromProps method  we can set here the props value to the state

    static getDerivedStateFromProps(props,state){
        return props.data;
    }

//   4th componentDidMount method runs 
    componentDidMount() {
        console.log("hlw");
        setTimeout(() => {
            // setState not working
          this.setState({budget: 55})
        }, 1000)
      }

    increseBudget(){
        // this.setState({budget:10});
        console.log("increase");
    }

    // 3rd render() method runs and show the html
    // render with state
    render(){
        return (
            <div className="card">
            <h1 >{this.state.title}</h1>
            <table>
                <tr>
                    <td>${this.state.budget}</td>
                    <td>{this.state.timeAgo}</td>
                </tr>
                <tr>
                    <td>{this.state.type}</td>
                </tr>
            </table>
            <button type='button' onClick={this.increseBudget}>Increase Budget</button>
        </div>
        );
    }

    // render with props 
    // render(){
    //     return (
    //         <div className="card">
    //         <h1 >{this.props.data.title}</h1>
    //         <table>
    //             <tr>
    //                 <td>${this.props.data.budget}</td>
    //                 <td>{this.props.data.timeAgo}</td>
    //             </tr>
    //             <tr>
    //                 <td>{this.props.data.type}</td>
    //             </tr>
    //         </table>
    //     </div>
    //     );
    // }
}

export default TaskCard;