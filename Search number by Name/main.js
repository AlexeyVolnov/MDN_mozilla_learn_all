var contacts = ["Алексей:89228086924", "Татьяна:89228738311", "Ольга:89225678954", "Майкл:89034568794", "Елена:89226205249", "Иван:89325467892"];
var search = document.querySelector("#search");
var results = document.querySelector("p");
var button = document.querySelector('button');

button.addEventListener('click', searchNumberOfName);

function searchNumberOfName() {
    if (search) {
        for (var i = 0; i < contacts.length; i++) {
            let NameNumber = contacts[i].split(':');
            if (search.value == NameNumber[0]) {
                results.textContent = NameNumber[0] + ", тел.: " + NameNumber[1];
                break;
            } else {
                results.textContent = "Номер не найден";
            }
        }
        search.addEventListener('focus',reset);
        function reset(){
            search.value = "";
            results.textContent = "";
        }
    }
}