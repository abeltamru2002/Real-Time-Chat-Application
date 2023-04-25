import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
   return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
          projectId="1dfc14ac-54ac-42c2-b26e-5e610506664f"
          username= {props.user.username}
          secret= {props.user.secret}
          style={{ height: '100%'}}
          />
          </div>
   )
}

export default ChatsPage