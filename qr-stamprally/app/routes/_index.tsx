import type { MetaFunction } from "@remix-run/node";
import stamps from '../stamps.json';
// スタンプ構成ファイルを読み込み

export const meta: MetaFunction = () => {
  return [
    { title: "スタンプラリー" },
    { name: "description", content: "スタンプラリー" },
  ];
};

  const tmp_alert = () => {
    alert('Clicked!');
  }

export default function Index() {
  return (
    <div className="grid justify-center">
      <div >
        <h1 className="font-bold mt-1 mb-2 grid justify-center">スタンプラリー</h1> 
    <button onClick={tmp_alert} className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-3 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-90">スタンプを押す</button>
      </div>
      <div>

      </div>
    </div>
  );
}
