import React from 'react';

export const { Provider, Consumer } = React.createContext();

export const withContext = (Component) => {
    return (props) => {
        return (
            <Consumer>
                {value => <Component {...value} {...props} />}
            </Consumer>
        )
    }
}