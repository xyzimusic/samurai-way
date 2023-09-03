import React from 'react';
import {StoreType} from './redux/store';

// interface IContextProps {
//     state: StateType
//     dispatch: ({type}: { type: string }) => void
//     getState: () => StateType
// }

export const StoreContext: React.Context<any> = React.createContext({} as StoreType)


export type ProviderType = {
    store: StoreType,
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>

    )
}