import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component{
  render(){
    console.log('message', this.props);
    let {activeChannel} = this.props;
    return(
      <div className='messages-container panel panel-default'>
        <div className='panel-heading'>
          <strong>{activeChannel.name}</strong>
        </div>
        <div className='panel-body messages'>
         <MessageList {...this.props} />
         <MessageForm {...this.props} />
        </div>
      </div>
    );
  }
}

MessageSection.propTypes = {
  messages: React.PropTypes.array.isRequired,
  addMessage: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
};
export default MessageSection;
