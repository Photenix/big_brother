import { useState } from 'react'
import AppRouters from './router/AppRouter'

function App() {
     const [count, setCount] = useState(0)

    return (
        <AppRouters/>
    )
}

export default App
