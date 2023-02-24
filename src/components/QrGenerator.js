import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator({text}) {
    return (<>
        <p>
            <QRCodeCanvas
                id="qrCode"
                value={text}
                size={200}
                bgColor={"#00ff00"}
                level={"H"}
            />
        </p>
    </>)
}