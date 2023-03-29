import React, { useState } from "react";
import './App.css'
const App = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [score, setScore] = useState(3)
    const [win, setWin] = useState(false)
    const [p1WinLose, setp1WinLose] = useState('')
    const [p2WinLose, setp2WinLose] = useState('')
    const [winText, setWinText] = useState('')

    const p1Score = () => {
        if (number1 != score) {
            setNumber1(number1 + 1)
            if (number1 == score - 1) {
                setNumber1(number1 + 1)
                setWin(true)
                setp1WinLose('Winning')
                setp2WinLose('Losing')
                setWinText('Player 1 Won.....Congrats!!!')
            }
        }
    }
    const p2Score = () => {
        if (number2 != score) {
            setNumber2(number2 + 1)
            if (number2 == score - 1) {
                setNumber2(number2 + 1)
                setWin(true)
                setp2WinLose('Winning')
                setp1WinLose('Losing')
                setWinText('Player 2 Won.....Congrats!!!')
            }
        }
    }

    const reset = () => {
        setNumber1(0);
        setNumber2(0);
        setWin(false);
        setp1WinLose('');
        setp2WinLose('');
        setWinText('');
    }
    const valueChange = (e) => {
        setScore(e.target.value);
        setNumber1(0);
        setNumber2(0);
        setWin(false);
        setp1WinLose('');
        setp2WinLose('');
        setWinText('');
    }

    return (
        <div className="container">
            <div className="intro">
                <h1 className="title">ScoreKeeper</h1>
                <div className="welcome">Hiii Welcome,Use buttons below to use the app:</div>
            </div>

            <div className="scoreTab"><span className={p1WinLose}>{number1}</span>  :<span className={p2WinLose}>{number2}</span></div>
            <div>
                <div className="selection">
                    <label htmlFor="playingTo">Change Winning Score</label>
                    <select id="playingTo" value={score}
                        onChange={valueChange}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
                <div className="btns1">
                    <button className="btn1" onClick={p1Score} disabled={win}>Player 1</button>
                    <button className="btn2" onClick={p2Score} disabled={win}>Player 2</button>
                </div>
                <div className="btns2">
                    <button className="reset" onClick={reset}>Reset</button>
                </div>
                <div className="winnerArea">
                    {winText}
                </div>
            </div>
        </div>

    )
}


export default App;