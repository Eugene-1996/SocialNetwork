import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/Profile-reducer';
import classes from './myposts-style.module.css'
import Post from './Post/Post';

export type MyPostsTypes = {
    PostsData: Array<PostType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
    addPost: () => void
}
export type PostType = {
  id: string 
  message: string
  likesCount: string 

}




const MyPosts = (props: MyPostsTypes) => {



    let PostsElements = props.PostsData.map((p, index) => <Post key={index} message={p.message} like={p.likesCount} />)


    let newPostElement = React.createRef<HTMLTextAreaElement>();
    // const newPostElement = useRef<HTMLTextAreaElement>(null)

    let onAddPost = () => {
        props.addPost()
        
        // props.dispatch( addPostActionCreator() )

    }

    let onPostChange = () => {
        let text = newPostElement.current!.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostActionCreator(text))
        
    }


    return (
        <div className={classes.postsBlock}>
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div>
                    <button >Remove post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {PostsElements}
            </div>
        </div>
    );
};

export default MyPosts;