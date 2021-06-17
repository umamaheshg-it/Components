import "./styles.css";
import React from 'react'
import ComponentC from './components/ComponentC'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export default function App() {
  return (
    <div className="App">
      <h1>
        {/*<ConditionalRenderHook/>*/}
        <UserContext.Provider value={'Kumar'}>
        <ChannelContext.Provider value={'Cygen'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
      </h1>
    </div>
  );
}
