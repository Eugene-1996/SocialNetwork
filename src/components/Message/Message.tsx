import { MessageType } from '../../App'
import classes from './Message-style.module.css'


const Message = (props: MessageType) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

export default Message