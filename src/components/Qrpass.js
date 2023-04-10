import { useState } from "react";
import { useImmer } from 'use-immer';
import QrGenerator from "./QrGenerator";
import TextToQR from "./TextToQR";

export default function PasswordGenerator() {
    let [something, setSomething] = useState({});
    let [isIncluded, updateIsIncluded] = useImmer({
        passLength: 6,
        smallLetters: true,
        capitalLetters: false,
        numbers: false
    });


    function randomPassGenerator(isIncluded) {
        let pass = '';
        let alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
        let alphabetsUpper = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
        let numbers = "1234567890";
        let generateFrom = '';
        if (isIncluded.capitalLetters) {
            generateFrom += alphabetsUpper;
        }
        if (isIncluded.smallLetters) {
            generateFrom += alphabetsLower;
        }
        if (isIncluded.numbers) {
            generateFrom += numbers;
        }
        for (let i = 0; i < isIncluded.passLength; i++) {
            pass += generateFrom.charAt(Math.floor(Math.random() * generateFrom.length));
        }
        return pass;
    }

    function handleClickGenerate(e) {
        e.preventDefault();
        setSomething({...something});

    }
    function handleOnLengthChange(e) {
        updateIsIncluded(draft => {
            draft.passLength = e.target.value;
        })
    }
    function handleCapitalLetters(e) {
        updateIsIncluded(draft => {
            draft.capitalLetters = e.target.checked;
        })
    }
    function handleSmallLetters(e) {
        updateIsIncluded(draft => {
            draft.smallLetters = e.target.checked;
        })
    }
    function handleDigits(e) {
        updateIsIncluded(draft => {
            draft.numbers = e.target.checked;
        })
    }

    let generatedPass = randomPassGenerator(isIncluded);
    // function handleInputChange(e) {
    //     setGeneratedPass(e.target.value);
    // }
    return (
        <section className="container">
            <h2 className="my-3 ">Password Generator</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="genpass" className="col-auto form-label">
                        Generated Password
                    </label>
                    <div>
                        <input
                            type="text"
                            // onChange={(e) => { handleInputChange(e) }}
                            readOnly
                            className="col-auto form-control"
                            id="genpass"
                            aria-describedby="emailHelp"
                            value={generatedPass}
                        />
                        <button onClick={(e) =>
                            handleClickGenerate(e)} className="my-2 col-auto btn btn-primary" >Generate Password</button>
                    </div>
                    <div id="emailHelp" className="form-text">
                        We'll never share your password with anyone else.
                    </div>

                </div>
                <div className="row my-3">
                    <label htmlFor="passLength" className="col-3 form-label">Password Length:</label>
                    <input onChange={(e) => handleOnLengthChange(e)} type="number" className="col-3 form-control w-50" defaultValue={6} id="passLength" />
                </div>
                <div className="form-check">
                    <input onClick={(e) => handleCapitalLetters(e)} className="form-check-input" type="checkbox" value="" id="capitalLetters" />
                    <label className="form-check-label" htmlFor="capitalLetter">
                        Include Capital Letters
                    </label>
                </div>
                <div className="form-check">
                    <input onClick={(e) => handleSmallLetters(e)} defaultChecked={true} className="form-check-input" type="checkbox" value="" id="smallLetters" />
                    <label className="form-check-label" htmlFor="smallLetter">
                        Include Small Letters
                    </label>
                </div>
                <div className="form-check">
                    <input onClick={(e) => handleDigits(e)} className="form-check-input" type="checkbox" value="" id="digits" />
                    <label className="form-check-label" htmlFor="digits">
                        Include Digits
                    </label>
                </div>

                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                </div>
            </form>
            <QrGenerator text={generatedPass}/>
            <TextToQR />

        </section>
    );
}