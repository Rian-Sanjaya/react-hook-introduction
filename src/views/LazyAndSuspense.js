import React, { lazy, Suspense} from 'react'

// import Time from './components/Time'
// import Math from './components/Math'

const Time = lazy(() => import('../components/Time'))
const Math = lazy(() => import('../components/Math'))

class LazyAndSuspense extends React.Component {
  state = {
    clicked: false
  }

  render() {
    return (
      <div>
        <header>
          <button
            style={{ border: '1px solid', backgroundColor: 'grey', padding: '10px 20px' }}
            onClick={() => this.setState({ clicked: true })}
          >
            Click me!
          </button>

          {
            this.state.clicked && 
            <div>
              {/* fallback is a piece of jsx element which is going to display when the components inside Suspense is being loaded */}
              <Suspense fallback={<h1>Loading...</h1>}>
                <Time />
                <Math />
              </Suspense>
            </div>
          }
        </header>
      </div>
    )
  }
}

export default LazyAndSuspense