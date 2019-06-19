import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import Style from './index.scss'

  class CssTransition extends Component{
       constructor (props) {
            super(props)
            this.state = {
                show : false
            }
       }

       setShowState = () =>{
        this.setState({
            show : !this.state.show
        })
   }

       render () {
        let {show} = this.state
           return ( 
            <div>
                <CSSTransition 
                    classNames={'slide'}
                    in={show} 
                    timeout={300}
                    mountOnEnter
                >
                    <div>I'm a fade Transition!</div>
                </CSSTransition>
            
                <button onClick={() => this.setShowState()}>
                    Click to Enter
                </button>
            </div>
           )
        }

}

export default CssTransition