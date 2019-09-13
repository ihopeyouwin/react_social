import React from 'react';
import s from './profileinfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    };

    startEditMode() {
        this.setState(
            {
                editMode: true
            }
        )
    }
    cancelEditMode() {
        this.setState(
            {
                editMode: false
            }
        )
    }
    render() {
        return (
            <div className={s.status}>
                {!this.state.editMode &&
                <div onDoubleClick={this.startEditMode.bind(this)}>
                    <span>Статус: </span>{this.props.status}
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={this.cancelEditMode.bind(this)} value={this.props.status}/>
                </div>
                }
                <div className={s.line}></div>
            </div>
        )
    }
}

export default ProfileStatus;