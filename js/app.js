var htmlString = "";

for (var country of countries) {
    htmlString +=
    `<tr>
        <td>${country.name.official}</td>
        <td>${country.region}</td>
        <td>${country.population}</td>
        <td><img src="${country.flags.png}" alt="Flag image" width="50"></td>
    </tr>`;
};

document.getElementById('countries').innerHTML = htmlString;