import React from 'react';
import s from './profileinfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
        name:''
    };

    startEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    cancelEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };
    onStatusChange =(evt)=>{
        this.setState({
            status: evt.currentTarget.value
        })
    };

    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div onDoubleClick={this.startEditMode}>
                    <span>Статус: </span>{this.props.status }
                </div>
                }
                {this.state.editMode &&
                <div onBlur={this.cancelEditMode}>
                    <input type='text' onChange={this.onStatusChange} autoFocus={true} value={this.state.status}/>
                </div>
                }
                <div className={s.line}></div>
            </div>
        )
    }
}

export default ProfileStatus;