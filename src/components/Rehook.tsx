import '../styles/Rehook.css'

const Rehook = () => {
  return (
    <div className='rehook-container'>
        <h1 className='hook'>
            ¿Preparado a pedir un presupuesto?
        </h1>
        <div className='button-container'>
            <div className='callbutton'>
                <img src="/src/assets/call.png" alt="Tlf" />
                <h1>Llámanos</h1>
            </div>
            <div className='messagebutton'>
                <img src="/src/assets/message.png" alt="Msg" />
                <h1>Escribenos</h1>
            </div>
        </div>
    </div>
  )
}

export default Rehook