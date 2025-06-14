import type { MetaFunction } from "@remix-run/node";
import stamps from '../stamps.json';

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
    <div>
 <div className="grid justify-center">
      <div >
        <h1 className="font-bold mt-1 mb-2 grid justify-center">スタンプラリー</h1> 
    <button onClick={tmp_alert} className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-3 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-90">スタンプを押す</button>
      </div>

    </div>
      <div className="grid justify-center grid-cols-2 gap-4 m-5">
        {stamps.map((stamp) => (
          <div key={stamp.id} className="border p-4">
            <h2 className="font-bold">{stamp.name}</h2>
            {stamp.stamp_img && <img src={stamp.stamp_img} alt={stamp.name} />}
          </div>
        ))}
      </div>

    </div>
     );
}
