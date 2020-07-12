import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {  Button, Icon, Menu, Segment, Sidebar } from 'semantic-ui-react'
import './SideBar.css';

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Segment}
    animation={animation}
    direction={direction}
    visible={visible}
  >
   
  </Sidebar>
)

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar 
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='dashboard' />
      DASHBOARD
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='map' />
      MAPS
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      SOMETHING
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      SOMETHING
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      SOMETHING
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      SOMETHING
    </Menu.Item>
  </Sidebar>
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
  state = {
    animation: 'overlay',
    direction: 'left',
    dimmed: false,
    visible: false,
  }

  handleAnimationChange = (animation) => () =>
    this.setState((prevState) => ({ animation, visible: !prevState.visible }))

  handleDimmedChange = (e, { checked }) => this.setState({ dimmed: checked })

  handleDirectionChange = (direction) => () =>
    this.setState({ direction, visible: false })

  render() {
    const { animation, dimmed, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div className="alignbar">
        

        
        <Button
          disabled={vertical}
          onClick={this.handleAnimationChange('slide along')}
        >
         <Icon name='bars' /> 

        </Button>
       
        
        <Sidebar.Pushable as={Segment}>
          {vertical ? (
            <HorizontalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          ) : null}
          {vertical ? null : (
            <VerticalSidebar
              animation={animation}
              direction={direction}
              visible={visible}
            />
          )}

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
            <div className="cards">
                
               
            </div>
              
            </Segment>
          </Sidebar.Pusher>
          
        </Sidebar.Pushable>
        </div> 
      
    )
  }
}