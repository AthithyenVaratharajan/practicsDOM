
window.addEventListener("DOMContentLoaded", event => {

    const h1 = document.createElement("h1");

    h1.className = "name";

    h1.innerText = "Iphone 14";

    h1.style.color = "gold";

    document.body.appendChild(h1);

    const ul = document.createElement("ul");

    ul.className = "my-details";

    ul.style.border = "1px solid black";

    const li = ["First", "Second", "Third", "Fourth"];

    document.body.appendChild(ul);


    h1.style.padding = "10px";

        ul.style.padding = "25px"


    li.forEach(ele => {

        const list = document.createElement("li");

        list.className = "detail";
        list.innerHTML = ele;
        list.style.padding ="15px";
        list.setAttribute("id", "list");
        ul.appendChild(list);

    });

    const item = document.querySelectorAll("detail");

    ul.addEventListener("mouseenter", () => {
        ul.style.backgroundColor = "green";
    });

    ul.addEventListener("mouseleave", () => {
        ul.style.backgroundColor = "white";
    });

    const newElement = document.createElement("div");

    document.body.appendChild(newElement);

    const p = document.createElement("p");

    newElement.appendChild(p);

    p.setAttribute("id", "Time");

    const myTimer = () => {
        const date = new Date();
        document.getElementById("Time").innerHTML = date.toLocaleTimeString()
    };

    setInterval(myTimer, 1000);

    const image = document.createElement("img");

    image.setAttribute("src", "https://imageio.forbes.com/specials-images/imageserve/62693273061db6040224e08a/Apple--iPhone--new-iPhone--iPhone-14--iPhone-14-Pro-Max--iPhone-14-release--iPhone-14/960x0.jpg?height=825&width=711&fit=bounds");

    document.body.appendChild(image);

    const form = document.createElement("form");

    form.style.border = "1px solid black";

    form.style.padding = "20px";

    const div = document.createElement("div");

    h3 = ["Your Name:", "Your Email:", "Your Phone:", "Your Address:"];

    h3.forEach(ele => {
        const headings = document.createElement("h3");

        headings.innerHTML = ele;
        div.appendChild(headings);
    });



    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const input3 = document.createElement("input");
    const input4 = document.createElement("input");

    input1.setAttribute("id", "myText");

    input1.placeholder = "Type name here..";

    input1.addEventListener("input", event => {
        if (input1.value === "N/A") {
            input1.style.backgroundColor = "pink";
        }
        input1.style.backgroundColor = "white";
    });

    input2.setAttribute("id", "myText");

    input2.placeholder = "Type Email here..";

    input2.addEventListener("input", event => {
        if (input2.value === "N/A") {
            input2.style.backgroundColor = "pink";
        }
        input2.style.backgroundColor = "white";
    });

    input3.setAttribute("id", "myText");

    input3.placeholder = "Type Phone here..";

    input3.addEventListener("input", event => {
        if (input3.value === "N/A") {
            input3.style.backgroundColor = "pink";
        }
        input3.style.backgroundColor = "white";
    });

    input4.setAttribute("id", "myText");

    input4.placeholder = "Type Address here..";

    input4.addEventListener("input", event => {
        if (input2.value === "N/A") {
            input2.style.backgroundColor = "pink";
        }
        input4.style.backgroundColor = "white";
    });

    const button = document.createElement("button");

    button.innerText = "Submit";

    button.addEventListener("click", event => {
        const print = document.createElement("p");
        print.innerHTML = input.value;
        form.appendChild(print);
    });

    div.appendChild(input1);
    div.appendChild(input2);
    div.appendChild(input3);
    div.appendChild(input4);

    const h2 = document.createElement("h2");

    h2.innerHTML= "Want an iPhone?!!!";

    div.appendChild(button);

    form.appendChild(h2);

    form.appendChild(div);



    document.body.appendChild(form);
});
