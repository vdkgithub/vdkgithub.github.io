
var Main = () => {
    var _ = this;
    
    this.mainBody = $('div.main-body');

    this.menuClick = (d, e) => {
        _.mainBody.load('pages/projects.html');
    }


}

ko.applyBindings(Main);