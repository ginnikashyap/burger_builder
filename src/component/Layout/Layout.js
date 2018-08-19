import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return(<Aux>
    <div>
      <Toolbar/> 
    <main className={classes.content}>
        {props.children}    
    </main>
        </div>
    </Aux>
    )
}

export default layout;