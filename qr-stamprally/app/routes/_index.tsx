import type { MetaFunction } from "@remix-run/node";
import stamps from '../stamps.json';
import { useState } from 'react';
import Qrreader from "./qr_reader";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

export const meta: MetaFunction = () => {
  return [
    { title: "スタンプラリー" },
    { name: "description", content: "スタンプラリー" },
  ];
};

export default function Index() {
  const [showAlert, setShowAlert] = useState(false);

  const tmp_alert = () => {
    alert('Clicked!');
    setShowAlert(true);
    return true;
  }

  const [showQrReader, setShowQrReader] = useState(false);

  const handleStamp = () => {
    setShowQrReader(prevShow => !prevShow); // 現在の状態を反転させる
    //alert('Clicked!');
    setShowAlert(true);
    return true;
  };

  return (
    <div>
      <div className="grid justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold mt-1 mb-2 grid justify-center">スタンプラリー</h1>
          <button onClick={handleStamp} className="mx-auto inline-flex h-10 items-center justify-center justify-self-center-safe rounded-md bg-cyan-500 px-3 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-90">スタンプを押す</button>
          {/* showQrReaderがtrueの場合のみQrReaderコンポーネントを表示 */}
          {showQrReader && <Qrreader />}
        </div>
      </div>
      <div className="flex justify-center flex-wrap m-10">
        {stamps.map((stamp) => (
          <div key={stamp.id} className="border p-10 m-3 w-64 bg-cyan-200">
            <h2 className="font-bold">{stamp.name}</h2>
            {showAlert ? (
              <img src={stamp.stamp_clear} alt={stamp.name} className="rounded-full " />
            ) : (
              <img src={stamp.stamp_img} alt={stamp.name} className="rounded-full " />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
