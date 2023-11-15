let heading= React.createElement("h1",
{
//atrtribute passes to h1 tag here
id:"heading",
abc:"ele"
},
"hello from React....")

        let root=ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)