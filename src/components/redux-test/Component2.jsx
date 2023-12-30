import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../state';
import { bindActionCreators } from 'redux';



export default function Component2() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch);
    const amount = 50;
    return (
        <div>
            <button
                onClick={() => withdrawMoney(amount)}
            >-</button>
            Rs.{amount}
            <button
                onClick={() => depositeMoney(amount)}
            >+</button>
        </div>
    )
}



// export default function Component2() {
//     const dispatch = useDispatch();
//     const amount = 50;
//     return (
//         <div>
//             <button
//                 onClick={() => dispatch(actionCreators.withdrawMoney(amount))}
//             >-</button>
//             Rs.{amount}
//             <button
//                 onClick={() => dispatch(actionCreators.depositeMoney(amount))}
//             >+</button>
//         </div>
//     )
// }
