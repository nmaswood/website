function renderHtml() {

    function renderTextBody() {

        this.source = document.getElementById("textBodiesTemplate").innerHTML;
        this.template = Handlebars.compile(this.source);

        this.data = {
            bodies: [
                {
                    text: "My name is <strong>Nasr Maswood</strong>." +
                    " I'm a third year Computer Science major at the <strong>University of Chicago</strong>." +
                    " This site has a little information about myself and the projects I'm" +
                    " involved in. If you would ever like to get in touch email me at <strong>nasrmaswood@gmail.com</strong>"
                    , name: 'About'
                },
                {
                    text: 'A link to my resume is <a href="/Nasr_Maswood_Resume.pdf"> here</a>.' +
                    " I'll post more descriptive information about my projects" +
                    " in the future."
                    , name: 'Resume'
                }
            ]
        };

        document.getElementById("textBodies").innerHTML = this.template(this.data);
    }

    function renderLinks() {

        this.source = document.getElementById("linksTemplate").innerHTML;
        this.template = Handlebars.compile(this.source);

        this.data = {
            bodies: [
            {
                name: "About"
            },
            {
                name: "Resume"
            }]
        };
        document.getElementById("links").innerHTML = this.template(this.data);
    }

    renderLinks();
    renderTextBody();
}

function addClasstoName(xpath, key, classif, classthen){

    if (!xpath || !classif || !classthen) return;

    var classname;
    var elements = document.querySelectorAll(xpath);
    var nodelistToArray = Array.apply(null, elements);

    nodelistToArray.map(
        function(element){
        name = element.getAttribute('name');
        classname = name == key? classif: classthen;
        element.setAttribute('class', classname);
    }
    )
}


function navigationEvents(){

    xpath1 = 'div[meta="Body-Content"]'
    xpath2 = 'li[meta="Navigation"]';

    var elements = document.querySelectorAll(xpath2);
    _.map(elements, function(x){
        var name = x.getAttribute('name');
        x.addEventListener('click', function(e){
            addClasstoName(xpath1, name, 'entry', 'invisible');
            addClasstoName(xpath2, name, 'current_page_item', 'null');
            if(e) e.stopPropogation();
        });
    })
};

function initState(){
    addClasstoName('div[meta="Body-Content"]', 'About', 'entry', 'invisible');
    addClasstoName('li[meta="Navigation"]', 'About', 'current_page_item', 'null');
    return;
}

function start(){
    renderHtml();
    initState();
    navigationEvents();
}

start();
