import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      activeChannel: {},
      users: [],
      activeUser: {}
    };
  }

  addChannel(name){
    let {channels}  = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    //Todo - send to server
  }

  setChannel(activeChannel){
    this.setState({activeChannel});
    // todo get channel messages

  }

  addUser(name){
    let {users}  = this.state;
    users.push({id: users.length, name});
    this.setState({users});
    //Todo - send to server
  }

  setUser(activeUser){
    this.setState({activeUser});
    // todo get User messages

  }

  render(){
    return(
      <div className='app'>
        <div className='nav'>
          <ChannelSection
            {...this.state}
            addChannel= {this.addChannel.bind(this)}
            setChannel= {this.setChannel.bind(this)}
          />
          <UserSection
            {...this.state}
            addUser= {this.addUser.bind(this)}
            setUser= {this.setUser.bind(this)}
          />
        </div>
      </div>

    );
  }
}

export default App;
