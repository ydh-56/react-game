import React, { PureComponent } from 'raect';

class Test extends PureComponent {
    state = {   
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true, 
        
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     }
    //     return false;
    // } PureComponent

    onClick = () => {
        this.setState({
            
        })
    }

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        );
    }
}
export default Test;