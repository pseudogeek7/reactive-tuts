import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = ()=> {

    return (
        <div className="ui container comments">
            <ApprovalCard> 
                <CommentDetail author="sam" timeAgo="Today at 0100 AM" commentText="WoW what a post" commentAvatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard> 
                <CommentDetail author="naina" timeAgo="Today at 0200 AM" commentText="amazing" commentAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="julia" timeAgo="Today at 0300 AM" commentText="kamaal" commentAvatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard><CommentDetail author="sophie" timeAgo="Today at 0400 AM" commentText="zabardast" commentAvatar={faker.image.avatar()}/></ApprovalCard>
        </div>

    );

};

ReactDOM.render(<App/>, document.querySelector('#root'));