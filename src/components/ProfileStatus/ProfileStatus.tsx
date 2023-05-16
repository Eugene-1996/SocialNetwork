import React, { ChangeEvent, useRef } from 'react';


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}




class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    // statusInputRef = useRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    // currentValueStatus = ''

    // HandlerStatus = (e: ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.currentTarget.value, 'Current')
    //     this.currentValueStatus= e.currentTarget.value
    // }

    activateEditMode = () => {
      this.setState({
        editMode: true
      })  
    }


    deactivateEditMode = () => {
        this.setState({
          editMode: false
        })  
        this.props.updateStatus(this.state.status)
      }


      onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
        
      }  


    componentDidUpdate(prevProps:  any, prevState: any){
        
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status})
    
            let a = this.state
            let b = this.props
            console.log(a)   
        }
      
    }

    render() {
        return (

            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>
                            {this.props.status || 'NO STATUS'}
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                }
            </div>

        );

    }


};

export default ProfileStatus;