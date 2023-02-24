import { useState } from "react";
import QrGenerator from "./QrGenerator";

export default function TextToQR() {
    let [myText, setMyText] = useState("www.waqas.com");
    function handleOnChange(e){
        setMyText(e.target.value);
    }

    return (
        <>
            <section className="my-3 container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="texttoqr" className="form-label">
                            Enter URL/Text:
                        </label>
                        <input
                            onChange={(e)=> handleOnChange(e)}
                            type="text"
                            className="form-control"
                            id="texttoqr"
                            placeholder="Enter your favourite URL"
                        />
                    </div>
                </form>
                <QrGenerator text={myText} />
            </section>
        </>
    )
}