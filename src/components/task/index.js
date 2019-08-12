import React from 'react';
import { bindActionCreators } from 'redux';
import {deleteTask} from '../../actions/index';
import {connect} from 'react-redux';

class Task extends React.Component{
    render(){
        return (
            <tr>
                <td>
                    {this.props.task}
                </td>
                <td>
                    <button onClick={() => this.props.deleteTask(this.props.id)}>DELETE</button>
                </td>
            </tr>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask: deleteTask}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(Task)