import type { MetaFunction } from "@remix-run/node";
import stamps from '../stamps.json';
import { useState } from 'react';
import qr_reader from "./qr_reader";

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

  return (
    <div>
      <div className="grid justify-center">
        <div >
          <h1 className="font-bold mt-1 mb-2 grid justify-center">スタンプラリー</h1>
          <button onClick={tmp_alert} className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-3 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-90">スタンプを押す</button>
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