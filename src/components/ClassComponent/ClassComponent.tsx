import React from 'react'

class ClassComponent extends React.Component <{name: string}>{
    state = {
        name: 'Mundo!!'
    }
    render() {
        return <><div>Ola {this.state.name} Eu sou um componente baseado em classe! State</div>
                <div>Ola {this.props.name} Eu sou um componente baseado em classe! Props</div>
                
                <button onClick={()=> {
                    this.setState({name: 'Diego!'})
                }}> Click me </button>   
               
                </>

    }

}
export default ClassComponent