import type { MetaFunction } from "@remix-run/node";

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
    <div className="grid justify-items-stretch">
      <div className="justify-self-center">
        <h1 className="font-bold underline">Hello world!</h1> 
    <button onClick={tmp_alert} className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-500 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-90">押して！</button>
      </div>
    </div>
  );
}
