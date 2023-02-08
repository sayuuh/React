import React from 'react'
import Formulario from './Formulario'

const Apresentacao = (props) => {
  return (
    <div>
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem quis perferendis aspernatur officiis eum facere officia est sequi repudiandae animi numquam, sit laudantium id voluptates assumenda, error veniam aliquid saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum totam id, sequi quis officia exercitationem natus expedita, ad ut corrupti quaerat nulla, modi doloremque dolore odio debitis quo fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quisquam voluptatum, quia a blanditiis molestiae. Omnis pariatur dolores, tenetur quo impedit, provident consequuntur repellat et aspernatur unde, sint corporis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo, cum rem, illum veniam laudantium necessitatibus dolores commodi velit, quibusdam perspiciatis eius voluptates sunt voluptatibus eveniet. Sunt saepe adipisci tempore.</p>
        </div>
        <div>
            <Formulario nome={props.nome} email={props.email} evento={props.evento}/>
        </div>
    </div>
  )
}

export default Apresentacao