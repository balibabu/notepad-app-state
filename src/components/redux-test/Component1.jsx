import React from 'react'
import { useSelector } from 'react-redux'

export default function Component1() {
    const amount=useSelector(state=>state.amount);
    return (
        <nav>
            Balance: Rs. {amount}
        </nav>
    )
}
