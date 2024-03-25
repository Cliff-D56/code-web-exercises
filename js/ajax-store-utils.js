const getTools = async ()=>{
    const url = "./data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
const createoption = (tools,options,i)=>{
    options += `<option value=${i}>${tools[i].title}</option>`
    return options
}
const createlog = (tools,html,i)=>{
    html += `<tr>
        <td>${tools[i].title}</td>
        <td>${tools[i].quantity}</td>
        <td>${tools[i].price}</td>
        <td>${tools[i].categories}</td>
        </tr>`
    return html
}
const loop = (tools,html,option)=>{
    for (let i = 0; i < tools.length; i++) {
        html = createlog(tools,html,i)
        option = createoption(tools,option,i)
        $("#insertProducts").html(html)
        $("#delnum").html(option)
    }
}

export {getTools, loop}