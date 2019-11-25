
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button, ButtonToolbar, Badge } from 'react-bootstrap';
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Chat from 'chat-react';
import LoginPage from './pages/LoginPage'
import MyChat from './pages/ChatPage'

function App() {
  return (
    <div className={styles.App}>

      <header className={styles.header}>
        <div className={styles.box}>
          <div className={styles.boxleft}>Chat App</div>
          <div className={styles.boxright}>
            <p className={null}>Login</p>
            <p className={styles.selected} >Message</p>
            <p className={null} >Rooms</p>
          </div>
        </div>
      </header>


      <section className={styles.content}>

        {/* <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Region</Form.Label>
            <Form.Control as="select">
              <option>South Aferica</option>
              <option>Acian</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
            <Form.Label>University</Form.Label>
            <Form.Control as="select">
              <option>Rice University</option>
              <option>USC</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form> */}
        <div className={styles.topBar}>
          <h5>
            <Badge variant="secondary"> &nbsp;&nbsp;Actions & options&nbsp; &nbsp;</Badge>
          </h5>
          <p>&nbsp;&nbsp;&nbsp;</p>
          <ButtonToolbar>
            <Button variant="primary">Dark</Button>
            <Button variant="secondary">Light</Button>
            <Button variant="success">Invite friend</Button>
            <Button variant="warning">Add friend</Button>
            <Button variant="danger">Change Room</Button>
            <Button variant="info">Edit name</Button>
          </ButtonToolbar>
        </div>

      </section>

      <MyChat />

      {/* <footer className={styles.footer}>
        <p>© <b>Game Sleepy Day</b></p>
        <p>Handmade with</p>
      </footer> */}

    </div>

  );
}

export default App;

// export default class App extends Component {
//   state = {
//     inputValue: '',
//     messages: [],
//     timestamp: new Date().getTime()
//   }
//   setInputfoucs = () => {
//     this.chat.refs.input.inputFocus();  //设置输入框为焦点状态
//   }
//   setScrollTop = () => {
//     this.chat.refs.message.setScrollTop(1200);  //设置滚动条的位置
//   }
//   sendMessage = (v) => {
//     const { value } = v;
//     if (!value) return;
//     const { messages = [] } = this.state;
//     messages.push(v);
//     this.setState({ messages, timestamp: new Date().getTime(), inputValue: '' });
//   }
//   render() {
//     const { inputValue, messages, timestamp } = this.state;
//     const userInfo = {
//       avatar: "http://img.binlive.cn/6.png",
//       userId: "59e454ea53107d66ceb0a598",
//       name: 'ricky'
//     };
//     return (
//       <div className={styles.App}>

//         <header className={styles.header}>
//           <div className={styles.box}>
//             <div className={styles.boxleft}>Chat App</div>
//             <div className={styles.boxright}>
//               <p className={styles.selected}>Login</p>
//               <p className={null} >Message</p>
//               <p className={null} >Rooms</p>
//             </div>
//           </div>
//         </header>

//         <section className={styles.content}>
//           <Chat
//             ref={el => this.chat = el}
//             className="my-chat-box"
//             dataSource={messages}
//             userInfo={userInfo}
//             value={inputValue}
//             sendMessage={this.sendMessage}
//             timestamp={timestamp}
//             placeholder="请输入"
//             messageListStyle={{ width: '30%' }}
//           />
//         </section>

//         <footer className={styles.footer}>
//           <p>© <b>Game Sleepy Day</b></p>
//           <p>Handmade with</p>
//         </footer>
//       </div>
//     );
//   }
// }


