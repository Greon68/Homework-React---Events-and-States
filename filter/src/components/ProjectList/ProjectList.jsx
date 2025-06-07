import './ProjectList.css'

const ProjectList = ({projects})=>{
    
    console.log ('ProjectList -',projects)

    return (        
    <div className='container' >
        {projects}
    </div>       
    )
}

export default ProjectList