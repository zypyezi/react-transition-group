import React, { Component } from 'react'
import { Transition } from 'react-transition-group';

const duration = 500;

const timeout={
    appear: 500,
    enter: 300,
    exit: 500,
   }

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
}

  class App extends Component{
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
            

                    <Transition 
                        in={show} 
                        timeout={duration} 
                        addEndListener={(node, done) => {
                            console.log('addEndListener')
                            // use the css transitionend event to mark the finish of a transition
                            node.addEventListener('transitionend', done, false);
                        }}
                        onEnter={(node, isAppearing) => {
                            console.log(node, isAppearing, 'onEnter')
                        }}
                        onEntering={(node, isAppearing) => {
                            console.log(node, isAppearing, 'onEntering')
                        }}
                        onEntered={(node, isAppearing) => {
                            console.log(node, isAppearing, 'onEntered')
                        }}
                        onExit={(node) => {
                            console.log(node, 'onExit')
                        }}
                        onExiting={(node) => {
                            console.log(node, 'onExiting')
                        }}
                        onExited={(node) => {
                            console.log(node, 'onExited')
                        }}
                    >
                            {state => (
                                <div style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}>
                                    I'm a fade Transition!
                                </div>
                            )}
                    </Transition>
                    
                   <button onClick={() => this.setShowState()}>
                        Click to Enter
                    </button>
               </div>
           
           )
        }

}

export default App