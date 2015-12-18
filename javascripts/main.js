
var Main = () => {
    var _ = this;
    
    this.mainBody = $('div.main-body');

    this.menuClick = (d, e) => {
        _.mainBody.load('pages/projects.html');
    }

    this.prClick = () => {
        _.fetchJSON('menu', (data) => {
            console.log(data);
        })
    }

    this.fetchJSON = (a,o) => {
        $.getJSON("jsonfiles/" + a + '.json', function (data) {
            o(data);
        })
    }


}

ko.applyBindings(Main);