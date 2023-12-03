const bai1 = document.getElementById('bai1');
const bai2 = document.getElementById('bai2')

function showBai1() {
    bai1.style.display = 'block';
    bai2.style.display = 'none';
}

function showBai2() {
    a = '';
    b = '';
    bai1.style.display = 'none';
    bai2.style.display = 'block';
}

function equation() {
    var a = document.getElementById('a_value').value;
    var b = document.getElementById('b_value').value;
    const showKq = document.getElementById('showKQ');
    showKq.innerHTML = 'x = ' + [-b / a];
    console.log(['x = ', (-b / a)]);
}

function triangle() {
    var a = document.getElementById('sda').value;
    var b = document.getElementById('sdb').value;
    const showKq1 = document.getElementById('showKq1');
    const showKq2 = document.getElementById('showKq2');
    let ch = [
        Math.sqrt(a * a + b * b),
    ]
    showKq1.innerHTML = 'Cạnh Huyền = ' + ch;
    showKq2.innerHTML = 'Đường cao = ' + [
        (a * b) / ch,
    ]
    console.log('Done');
}