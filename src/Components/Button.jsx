import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../Slice/quizSlice';

const Button = () => {
    const count = useSelector((state) => state.quiz.value)
    const dispatch = useDispatch()
    return (

            <div className="container d-flex justify-content-between mt-1">
                <div>
                <button class="btn btn-primary" type="button" onClick={()=>{dispatch(decrement())}}>&laquo; Previous</button>
                </div>
                <div>
                <button class="btn btn-primary" type="button" onClick={()=>{dispatch(increment())}}>Next &raquo;</button>
                </div>
            </div>

    )
}

export default Button