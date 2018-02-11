import React from 'react'

import Counter from './Counter'

// CSS
import '../scss/main'

class App extends React.Component {

    render() {
        return (
            <Counter start={0} increment={20} />
          )
    }

}

export default App