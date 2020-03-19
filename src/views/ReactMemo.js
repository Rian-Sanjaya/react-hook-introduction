import React, { memo } from 'react'

// memo compare the props pass into the component
// if the props (text) has not changed, it will not render the component again
const Header = memo(({text}) => {
  console.log('render')
  return <div>{text}</div>
})

class ReactMemo extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <Header text={"Header"} />
        <div>{this.state.count}</div>
        <button
          style={{ border: '1px solid', padding: '10px 20px'}}
          onClick={() => this.setState({count: this.state.count + 1})}
        >
          Click me
        </button>
      </div>
    )
  }
}

export default ReactMemo