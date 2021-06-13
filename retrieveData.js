function requestData() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://milkii2019.github.io/hello/abc.json");
    xhr.onload = () => {
        console.log("working quest");
        try {
            console.log("working onload");
            const json = JSON.parse(xhr.responseText);
            console.log("working onload");
            populateData(json);
        } catch (e) {
            console.warn("could not load");
        }
    };
    xhr.send();
    console.log("from sending");
}

function populateData(json) {
    console.log(json);
    document.getElementById("School").innerHTML = json.School;
    document.getElementById("Major").innerHTML = json.Major;
    document.getElementById("Type").innerHTML = json.Type;
    document.getElementById("Year").innerHTML = json.Year;
}