import { useNavigate } from "react-router-dom";
import { socket } from "../sockets/client.js";

export default function LobbyPage({ codeBlocks = [] }) {
  const navigate = useNavigate();

  const handleRedirect = (blockId, blockTitle) => {
    socket.emit('joinRoom', { roomId: blockId, roomTitle: blockTitle }),
      navigate(`/code-block/${blockId}`)
  }

  return (
    <div className="page lobby-page">
      <h1>Choose a code block</h1>
      <ul className="block-list">
        {codeBlocks.map((block) => (
          <li className="block-item" key={block._id} onClick={() => handleRedirect(block._id, block.title)}>{block.title}</li>
        ))}
      </ul>
    </div>
  )
}
