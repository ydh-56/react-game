// import React from 'react';

// const Try = ({ tryInfo }) => {
//     return(
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// }



import React, { PureComponent } from 'react';

class Try extends PureComponent {

    render() {
        const { tryInfo } = this.props;
        return (
            <li>
                <div>{tryInfo.try}</div>
                <div>{tryInfo.result}</div>
            </li>
        )
    }

}
export default Try;