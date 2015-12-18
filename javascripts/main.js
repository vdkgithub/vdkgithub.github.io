
var Main = () => {
    var _ = this;

    this.mData = {
        Base: {},
        prMenus: ko.observableArray(),
        CurrentMenu: ko.observable(''),
        CurrentProject: ko.observable()
    }

    this.mainBody = $('div.main-body');


    this.menuClick = (b, d, e) => {
        _.mData.CurrentMenu(b);
        $('div.main-body').css({ opacity: 0 });
        if (b == "Projects") {
            _.mData.prMenus(Enumerable.From(_.mData.Base.Projects).Select(r=> { return { Name: r.Name, ID: r.ID } }).ToArray());
        }
        setTimeout(() => {
            $('div.main-body').css({ opacity: 1 });
        })
    }

    this.transition = (o) => {
    }

    this.Init = () => {
        _.fetchJSON('projects', (data) => {
            _.mData.Base = data;
        });
    }

    this.prClick = (d, e) => {
        _.mData.CurrentProject(Enumerable.From(_.mData.Base.Projects).Where(r=>r.ID == d.ID).SingleOrDefault(null));
    }

    this.fetchJSON = (a, o) => {
        $.getJSON("jsonfiles/" + a + '.json', function (data) {
            o(data);
        })
    }

    var __construct = function() {
        _.Init();
    }(_);

}

ko.applyBindings(Main);