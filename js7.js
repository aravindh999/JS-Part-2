let cal = document.getElementById("cal");
document.getElementById("year").addEventListener("input", changed);
function changed() {
    let year = +document.getElementById("year").value;
    let date = new Date(year, 0);
    let str = "";
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    for (let k = 0; k < 12; k++) {
        str += `<table>`;
        let frstDay = date.getDay();
        let cnt = 0;
        str += `<tr class="mname"><th colspan=7>${monthNames[k]}</th></tr>`;
        str +=
            "<tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr>";
        for (let i = 0; i < 6; i++) {
            str += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (cnt < frstDay) {
                    str += `<td></td>`;
                } else if (date.getMonth() == k) {
                    str += `<td>${cnt - frstDay + 1}</td>`;
                    date.setDate(date.getDate() + 1);
                }
                cnt++;
            }
            str += "</tr>";
        }
        str += "</table>";
    }
    cal.innerHTML = str;
}
changed();
