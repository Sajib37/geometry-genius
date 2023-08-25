function setResult(area, shapeName) {
    if (isNaN(area)) {
        document.getElementById('result-title').classList.add("hidden");
        document.getElementById('result').innerText = "Please , Enter valid input";
    }
    else {
        document.getElementById('shape-name').innerText = shapeName;
        document.getElementById('result').innerText = area;
        document.getElementById('result-title').classList.remove("hidden");
    }
}
function getInfo(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}
document.getElementById('triangle-btn').addEventListener('click', function () {
    const base = getInfo('triangle-base');
    const height = getInfo('triangle-height');
    const area = 0.5 * base * height;
    setResult(area,'Triangle')
})
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const length = getInfo('rectangle-length');
    const width = getInfo('rectangle-width');
    const area = length*width;
    setResult(area,'Rectangle')
})
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pValue = getInfo('p-value');
    const bValue= getInfo('b-value');
    const area = 0.5 * pValue * bValue;
    setResult(area,'Pentagon')
})
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const aAxis = getInfo('a-axis');
    const bAxis= getInfo('b-axis');
    const area = 3.1416 * aAxis * bAxis;
    setResult(area,'Ellips')
})
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const aAxis = getInfo('first-d');
    const bAxis= getInfo('second-d');
    const area = 0.5 * aAxis * bAxis;
    setResult(area,'Rhombus')
})
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const pBase = getInfo('p-base');
    const pHeight= getInfo('p-height');
    const area =  pBase * pHeight;
    setResult(area,'Parallelogram')
})