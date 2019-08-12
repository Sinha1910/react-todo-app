import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from '../../actions'

class Taskbar extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref="task"  placeholder="Add task"/>
                <button onClick={() => this.props.addTask(this.refs.task.value)}>Add Task</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask:addTask}, dispatch);
}

export default connect(() => {return {};}, mapDispatchToProps)(Taskbar);