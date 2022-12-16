import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Quiz.css";


const Quiz = () => {
  const count = useSelector((state) => state.quiz.value);
  const quiz_arr = useSelector((state) => state.quiz.all_Quizs);
  const dispatch = useDispatch();
  return (
    <>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button">
              Question no #1
              {
                <h1>{quiz_arr[count].question}</h1>
              }
            </button>
          </h2>

          {
            quiz_arr[count].option.map((ele) => {
              return (
                <>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label class="form-check-label" for="flexRadioDefault2">
                      {
                        ele
                      }
                    </label>
                  </div>
                </>
              )
            })
          }



        </div>
      </div>
    </>
  )
}

export default Quiz;