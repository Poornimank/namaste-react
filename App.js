{/* <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}
//React Element(Object)=HTML(browser understands)

const parent= React.createElement("h1",{id:"Parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]
)]
);


console.log(parent);//object
//const root=ReactDOM.createRoot(document.getElementById("root"));
const root=ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);