import {EventEmitter} from 'events';

class Socket {
  constructor(ws = new WebSocket(), ee = new EventEmitter()){
    super();
    this.ws = ws;
    this.ee = ee;
    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
  }
  on(name, fn){
    this.ee.on(name, fn);
  }
  off(name, fn){
    this.ee.removeListener(name, fn);
  }
  message(e){
    const event  = JSON.parse(e.data);
    if(event.name === 'channel add'){
      this.newChannel(event.data);
    }
  }
  open(){
    this.setState({connected: true});
  }
  close(){
    this.setState({connected: false});
  }
}
