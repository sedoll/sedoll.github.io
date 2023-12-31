console.log(
    "Message: This site is under construction. Work is underway to correct errors and improve the functionality.",
);
/* Fakes the loading setting a timeout Begin */
$(document).ready(function () {
    setTimeout(function () {
        $("body").addClass("loaded");
    }, 2500);
});
/* Fakes the loading setting a timeout End */
/* Rotate photo Begin */
// $(function () {
//     $(".about").hover(
//         function () {
//             setTimeout(function () {
//                 $(".Roman_Matviy").addClass("hover");
//                 $(".image-container").addClass("color");
//             }, 3000);
//         },
//         function () {
//             setTimeout(function () {
//                 $(".Roman_Matviy").removeClass("hover");
//                 $(".image-container").removeClass("color");
//             }, 3000);
//         },
//     );
// });
/* Rotate photo End */
/* Year copyright Begin */
$(function () {
    thisyear = new Date().getFullYear();
    $(".copyrightYear").text(thisyear);
});
/* Year copyright End */
/* Send Mail Begin */
$(document).ready(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        let mailto_link =
            "mailto:" +
            "roman@matviy.pp.ua" +
            "?subject=" +
            $("#name").val() +
            "&cc=" +
            $("#email").val() +
            "&bcc=" +
            "matviy.pp.ua@gmail.com " +
            "&body=" +
            "Hello Roman Matviy. My name " +
            $("#name").val() +
            " and mail: " +
            $("#email").val() +
            " Message: " +
            $("#message").val() +
            `
            Send from http://matviy.pp.ua`;
        win = window.open(mailto_link, "emailWindow");
        if (win && win.open && !win.closed) win.close();
    });
});
/* Send Mail End */
/* WOW Animated Begin */
new WOW().init();
/* WOW Animated End */
/* AboutMe Begin */
const aboutMe = (
    title,
    fullname,
    location,
    nationality,
    email,
    skype,
    phone,
    mobile,
    github,
    linkedin,
    facebook,
) => ({
    title,
    fullname,
    location,
    nationality,
    email,
    skype,
    phone,
    mobile,
    github,
    linkedin,
    facebook,
});
const abouts = [
    aboutMe(
        "Front-end developer",
        "Roman Matviy",
        "Lviv, Ukraine",
        "Ukrainian",
        "roman@matviy.pp.ua",
        "romas6ka",
        "+380 93 88 00 822",
        "+380 67 77 19 340",
        "github.com/MatviyRoman",
        "linkedin.com/in/MatviyRoman",
        "facebook.com/romas6ka",
        "Vue.js, Angular 2, TypeScript, PHP, MySQL",
        "Vue.js, Node.js, Angular 2 / TypeScript, React, PHP, MySQL, AJAX",
        "punctual, without bad habits, persistent and purposeful, responsible and executive, prone to analytical activity, prone to analytical activity",
    ),
];
/* AboutMe End */
/* Front-End Begin */
const frontEnd = (name, num) => ({
    name,
    num,
});
const frontEnds = [
    frontEnd("HTML5", "90"),
    frontEnd("CSS3", "70"),
    frontEnd("JavaScript", "80"),
    frontEnd("SASS/ SCSS", "70"),
];
/* Front-End End */
/* Back-End Begin */
const backEnd = (name, num) => ({
    name,
    num,
});
const backEnds = [
    backEnd("MySQL", "90"),
    backEnd("Maria", "90"),
    backEnd("Java", "90"),
    backEnd("Python", "85"),
];
/* Back-End End */
/* Certificates Begin */
const certificate = (firstDate, secondDate, name, license, link) => ({
    firstDate,
    secondDate,
    name,
    license,
    link,
});
const certificates = [
    certificate(
        "8 March 2020",
        "soon",
        "ScriptJedi42 - ProgrammingMentor / ScriptJedi42 - Ментор з Програмування",
        "2020-ecb3d4127b27",
        "http://cert.programmingmentor.com/2020-ecb3d4127b27.pdf",
    ),
    certificate(
        "18 Februar 2019",
        "soon",
        "Basics of Web UI development / Основи Web UI розробки",
        "36340060295e40e5b149e02866465b3d",
        "https://courses.prometheus.org.ua:18090/cert/36340060295e40e5b149e02866465b3d",
    ),
    certificate(
        "30 March 2020",
        "soon",
        "PHP Tutorial course / Основи PHP розробки",
        "1059-10299461",
        "https://www.sololearn.com/Certificate/1059-10299461/pdf/",
    ),
    certificate(
        "04 April 2020",
        "soon",
        "SQL Fundamentals course / Основи SQL розробки",
        "1060-10299461",
        "https://www.sololearn.com/Certificate/1060-10299461/pdf/",
    ),
    certificate(
        "09 September 2018",
        "soon",
        "HTML Fundamentals course / Основи HTML розробки",
        "1014-10299461",
        "https://www.sololearn.com/Certificate/1014-10299461/pdf/",
    ),
    certificate(
        "08 September 2018",
        "05 Januar 2020",
        "CSS Fundamentals course / Основи CSS розробки",
        "1023-10299461",
        "https://www.sololearn.com/Certificate/1023-10299461/pdf/",
    ),
    certificate(
        "15 October 2018",
        "06 December 2019",
        "JavaScript Tutorial course / Основи JavaScript розробки",
        "1024-10299461",
        "https://www.sololearn.com/Certificate/1024-10299461/pdf/",
    ),
    certificate(
        "16 October 2018",
        "soon",
        "jQuery Tutorial course / Основи jQuery розробки",
        "1082-10299461",
        "https://www.sololearn.com/Certificate/1082-10299461/pdf/",
    ),
];
/* Certificates End */
/* CMS Begin */
const cms = (name, num) => ({
    name,
    num,
});
const cmss = [
    cms("OsClass", "75"),
    cms("OpenCart", "80"),
    cms("WordPress + Elementor", "80"),
];
/* CMS End */
/* Framework Begin */
const framework = (name, num) => ({
    name,
    num,
});
const frameworks = [
    framework("Spring", "90"),
    framework("Bootstrap", "60"),
    framework("jQuery", "70"),
    framework("React", "50"),
];
/* Framework End */
/* Language Begin */
const language = (name, num, level) => ({
    name,
    num,
    level,
});
const languages = [
    language("English", "49", "Pre-intermediate"),
    language("Polish", "35", "Beginner"),
    language("Ukrainian", "100", "Proficient"),
    language("Russian", "80", "Advanced"),
];
/* Language End */
/* Contacts Begin */
const contact = (icon, name, url) => ({
    icon,
    name,
    url,
});
const contacts = [
    contact(
        "fas fa-map-marker-alt",
        "Lviv, Ukraine",
        "https://www.google.com/maps/place/+79000/@49.8326046,23.8721529,11z/data=49.839683!4d24.029717",
    ),
    contact("fas fa-phone", "+38 (093) 88 00 822", "tel:+380 88 00 822"),
    contact("far fa-envelope", "roman@matviy.pp.ua", "mailto:roman@matviy.pp.ua"),
    contact(
        "fab fa-viber",
        "+38 (093) 88 00 822",
        "viber:chat?number=+380938800822",
    ),
    contact("fab fa-skype", "romas6ka", "skype:live:romas6ka"),
];
/* Contacts End */
/* Links Begin */
const link = (name, url) => ({
    name,
    url,
});
const links = [
    link("KeyTest", "https://keytest.pp.ua"),
    link("Calculator", "https://calculator.matviy.pp.ua"),
    link("PSD Models", "http://psd.matviy.pp.ua"),
    link("Emmet-Cheat", "http://cheat.matviy.pp.ua"),
    link("Tools & Programms", "https://github.com/MatviyRoman/Tools-Programm"),
    link("Question & Answer", "https://answer.matviy.pp.ua"),
    link("Additional Materials", "#materials"),
];
/* Links End */
/* Menus Begin */
const menu = (name, url) => ({
    name,
    url,
});
const menus = [
    menu("Home", "https://matviy.pp.ua"),
    menu("About me", "#about"),
    menu("Resume", "pdf/Roman.Matviy.CV.pdf"),
    menu("My Skills", "#skillset"),
    menu("My Projects", "#projects"),
    menu("My Certificates", "#certificates"),
    menu("My language", "#languages"),
];
/* Menus End */
/* Social Begin */
const social = (name, icon, url) => ({
    name,
    icon,
    url,
});
const socials = [
    social("GitHub", "icon central github", "https://github.com/MatviyRoman"),
    social(
        "Linkendin",
        "icon central linkedin",
        "http://linkedin.com/in/MatviyRoman",
    ),
    social(
        "Facebook",
        "icon central facebook",
        "https://www.facebook.com/romas6ka",
    ),
    social("Skype", "icon central skype", "skype:live:romas6ka"),
    social("Viber", "icon central viber", "viber:chat?number=+380938800822"),
    // social(
    //  'YouTube',
    //  'icon youtube',
    //  'https://www.youtube.com/channel/UCZ1W8CdO3fDnvsobEqkbv6w'),
    social("E-mail", "icon central envelope", "#contact"),
];
/* Social End */
/* Skills Begin */
const skill = (name, num) => ({
    name,
    num,
});
const skills = [
    skill("OpenCV", "90"),
    skill("Android", "80"),
    skill("Kotlin", "70"),
];
/* Skills End */
/* Tool Begin */
const tool = (name, num) => ({
    name,
    num,
});
const tools = [
    tool("Chrome Browser", "90"),
    tool("Edge Browser", "90"),
    tool("Command Line", "85"),
    tool("Git / Github", "85"),
];
/* Tool End */
/* Programs Begin */
const program = (name, num) => ({
    name,
    num,
});
const programs = [
    program("Visual Studio Code", "90"),
    program("Eclipse", "90"),
    program("IntelliJ IDEA", "90"),
];
/* Programs End */
/* Project Begin */
const project = (date, url, github, name, desc, skills, active) => ({
    date,
    url,
    github,
    name,
    desc,
    skills,
    active,
});
const projects = [
    project(
        "21 Februar 2019",
        "matviy.pp.ua",
        "https://github.com/MatviyRoman/Portfolio2019",
        "My Portfolio 2019",
        `This my portfolio`,
        "Vue.js, HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "active",
    ),
    project(
        "15 Januar 2019",
        "camel.matviy.pp.ua",
        "https://github.com/MatviyRoman/Camel",
        "Camel Heal",
        `Сonvert home page PSD into html (CamelCo PSD/Images - https://drive.google.com/open?id=1i5Jp0cIjb6K3CUJHrYLFFhk2upM4wQPZ; to access PSD, click file named“Camel HealGCoHome-November 7.psd” and then click “Download”).`,
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "",
    ),
    project(
        "21 December 2018",
        "home.matviy.pp.ua",
        "https://github.com/MatviyRoman/HOME",
        "Home",
        "Зверстати у відповідності до прикріпленого макету. Необхідні технології: Сss framework: bootstrap 3 або 4 Js framework : Jquery Валідний код та адаптація під мобільні пристрої.",
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "",
    ),
    project(
        "15 December 2018",
        "magazino.ga",
        "http://magazino.ga",
        "magazino.ga",
        "My Home Project. Wordpress. My design with using plugin Elementor",
        "HTML5, CSS3, Wordpress, plugin Elementor, Landing Page",
        "",
    ),
    project(
        "8 December 2018",
        "pantomax.matviy.pp.ua",
        "https://github.com/MatviyRoman/Pantomax",
        "Pantomax",
        "Сделать верстку с макета и адаптировать ее под мобильные устройства. Адаптивную верстку необходимо сделать на свое усмотрение.",
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "",
    ),
    project(
        "7 December 2018",
        "todo-list.matviy.pp.ua",
        "https://github.com/MatviyRoman/todo-list",
        "todo-list",
        `Реализовать todo list (список дел). Функционал: вывод списка задач из базы данных, создание новой задачи, редактирование задачи, удаление задачи. Клиентская часть. Для всего использовать Angular Material Design. Основной компонент приложения - список задач. При открытии страницы должен показываться лоадер (задачи загружаются…). 1.1 Если задач в базе нет, вывести сообщение об этом и кнопку “создать первую задачу”. 1.2 Если есть задачи, список задач в виде таблицы (столбцы - id задачи, текст задачи, дата создания, действия с задачей). Кнопка добавления новой задачи над таблицей. При нажатии на кнопку добавления задачи открывается боковое окно (drawer) с заголовком (toolbar). 2.1 В боковом окне будет расположено текстовое поле + кнопка “добавить задачу”. 2.2 Кнопка должна быть неактивной, если поле пустое. 2.3 При добавлении задачи сначала должен показываться лоадер (подождите, идёт добавление), а затем окно должно закрываться. В случае ошибки должно появляться сообщение (в виде snackbar). 2.4 Добавить ошибку в случае, если введенный текст содержит символ “!”. Т.е. если пользователь ввёл текст “Выполнить испытательное задание!”, то при попытке создать задачу должен сначала показаться лоадер, а затем снова поле с кнопкой + в snackbar должно появиться сообщение с ошибкой. 2.5 После добавления задачи она также добавляется в таблицу на странице. При наведении на строку задачи в таблице, возле текста задачи появляется иконка редактирования (ручка). 3.1 При нажатии на кнопку редактирования открывается модальное окно (dialog) с текстовым полем и кнопками “Отмена” и “Сохранить”. 3.2 При нажатии на “Сохранить” сначала показывается лоадер (progress bar), затем окно закрывается и текст задачи в таблице меняется. В последней колонке (действия с задачей) должна быть кнопка-иконка корзины. 4.1 При нажатии открывается модальное окно (dialog) с подтверждением удаления. 4.2 При подтверждении удаления сначала показывается лоадер (progress bar), затем окно закрывается и задачи удаляется из списка проекта.`,
        "VueJS, HTML5, CSS3, Bootstrap 4, Responsive Design, Landing Page",
        "",
    ),
    project(
        "27 November 2018",
        "travel.matviy.pp.ua",
        "https://github.com/MatviyRoman/Travel-Agency",
        "Travel Agency",
        "Responsive design with psd layouts",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design",
        "",
    ),
    project(
        "26 November 2018",
        "portfolio2018.matviy.pp.ua",
        "https://github.com/MatviyRoman/My-Portfolio-2018",
        "My Portfolio 2018",
        `This is my old portfolio :)`,
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "",
    ),
    project(
        "15 November 2018",
        "roman.matviy.pp.ua",
        "https://github.com/MatviyRoman/Roman.Matviy.CV",
        "Roman.Matviy.CV",
        "Responsive design with psd layouts Roman.Matviy.CV",
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design, Landing Page",
        "",
    ),
    project(
        "14 November 2018",
        "learn.matviy.pp.ua",
        "https://github.com/MatviyRoman/Learn-Theory-of-JS",
        "Learn Theory of JS",
        "Responsive design with psd layouts. Learn Theory of JS",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page",
        "",
    ),
    project(
        "10 November 2018",
        "short-code-vue.matviy.pp.ua",
        "https://github.com/MatviyRoman/Short-code-vue",
        "Short code vue",
        "Learn Theory of vue.js",
        "VueJS, HTML5, CSS3",
        "",
    ),
    project(
        "10 November 2018",
        "vue.matviy.pp.ua",
        "https://github.com/MatviyRoman/Test-vue.js",
        "Test vue.js",
        "Learn Theory of vue.js",
        "VueJS, HTML5, CSS3",
        "",
    ),
    project(
        "9 November 2018",
        "resume.matviy.pp.ua",
        "https://github.com/MatviyRoman/Old-my-resume",
        "Old my resume",
        "Learn Theory of vue.js",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page",
        "",
    ),
    project(
        "6 November 2018",
        "startup.matviy.pp.ua",
        "https://github.com/MatviyRoman/Startup.matviy.pp.ua",
        "Startup",
        "Responsive design with psd layouts",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design",
        "",
    ),
    project(
        "1 November 2018",
        "github.com/MatviyRoman/AngularJS",
        "https://github.com/MatviyRoman/AngularJS/tree/master/angular2-intro",
        "AngularJS",
        "AngularJS",
        "HTML5, CSS3, AngularJS",
        "",
    ),
    project(
        "26 October 2018",
        "example.matviy.pp.ua",
        "https://github.com/MatviyRoman/example.matviy.pp.ua",
        "example",
        "Responsive design with psd layouts",
        "HTML5, CSS3, Bootstrap 3, Responsive Design",
        "",
    ),
    project(
        "26 October 2018",
        "gentab.matviy.pp.ua",
        "https://github.com/MatviyRoman/HTML-Tables-Generation",
        "HTML Tables Generation",
        "HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design, Landing Page",
        "",
    ),
    project(
        "25 October 2018",
        "test.matviy.pp.ua",
        "https://github.com/MatviyRoman/test.matviy.pp.ua",
        "test.matviy.pp.ua",
        "HTML Tables Generation. My Home Project. Responsive design with psd layouts HTML Tables Generation",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design",
        "",
    ),
    project(
        "10 October 2018",
        "creatives.matviy.pp.ua",
        "https://github.com/MatviyRoman/Creatives-Project",
        "Creatives",
        "Responsive design with psd layouts",
        "HTML5, CSS3, Bootstrap 4, jQuery, Responsive Design",
        "",
    ),
    project(
        "25 Januar 2019",
        "arnika.matviy.pp.ua",
        "https://github.com/MatviyRoman/www.arnika.od.ua",
        "МЦ Арника arnika.od.ua",
        "Зробити Responsive Design. Оригінал з того, що я робив можна глянути тут http://arnika.matviy.pp.ua/original/index.html",
        "HTML5, CSS3, Bootstrap 4, Responsive Design",
        "",
    ),
    project(
        "7 October 2018",
        "modal.matviy.pp.ua",
        "https://github.com/MatviyRoman/My-Modal-Window",
        "Window modal test",
        "Responsive design with psd layouts. This is my window modal test.",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design",
        "",
    ),
    project(
        "24 September 2018",
        "bisines.matviy.pp.ua",
        "https://github.com/MatviyRoman/Bisines-Company-Project",
        "Bisines-Company",
        "My project building with bootstrap &amp; jQuery. Responsive design with psd layouts",
        "HTML5, CSS3, Bootstrap 3, jQuery, Responsive Design",
        "",
    ),
];
/* Project End */
/* Core Begin */
new Vue({
    el: "#Roman_Matviy",
    data: {
        isActive: false,
        show: true,
        about: {
            title: "Front-end developer",
            fullname: "Roman Matviy",
            location: "Lviv, Ukraine",
            nationality: "Ukrainian",
            email: "roman@matviy.pp.ua",
            site: "matviy.pp.ua",
            skype: "romas6ka",
            phone: "+380 93 88 00 822",
            mobile: "+380 67 77 19 340",
            github: "github.com/MatviyRoman",
            linkedin: "linkedin.com/in/MatviyRoman",
            facebook: "facebook.com/romas6ka",
            qualities: `punctual,
                        without bad habits,
                        persistent and purposeful,
                        responsible and executive,
                        prone to analytical activity,
                        prone to analytical activity`,
            study: "Vue.js, React, Angular, TypeScript, PHP, MySQL, Node.js",
            understanding: "Vue.js, Angular, TypeScript, PHP, MySQL, AJAX",
        },
        abouts,
        backEnds,
        certificates,
        contacts,
        cmss,
        frontEnds,
        frameworks,
        languages,
        links,
        menus,
        socials,
        skills,
        tools,
        programs,
        projects,
        project: projects[1],
        selectedProjectIndex: 0,
        phoneVisibility: false,
        searchProjects: "",
        select: 1,
    },
    methods: {
        modalOpen: function () {
            this.isActive = true;
        },
        modalClose: function () {
            this.isActive = false;
        },
        selectProject: function (index) {
            // console.log('Click', index)
            this.project = projects[index];
            this.selectedProjectIndex = index;
        },
        //  select(project,index) {
        //      this.project = project;
        //      this.project = this.filteredLessons[index]
        //      this.selectLessonIndex = index
        //      console.log('click', index);
        // },
    },
    computed: {
        message: function () {
            return "Hello " + about.fullname;
        },
        phoneBtnText() {
            return this.phoneVisibility ? "Hide phone" : "Show phone";
        },
        filteredLessons() {
            return this.skills.filter(skill => {
                return (
                    skill.title.indexOf(this.search) > -1 ||
                    skill.description.indexOf(this.search) > -1
                );
            });
        },
    },
    filters: {
        date(value) {
            return value.toLocalString();
        },
    },
});
/* Core End */
$(document).ready(function () {
    var mc = {
        "0-19": "bg-danger red",
        "20-39": "bg-warning orange",
        "40-59": "bg-info blue",
        "60-79": "green",
        "80-100": "bg-success green",
    };

    function between(x, min, max) {
        return x >= min && x <= max;
    }
    var bc, dc, first, second, th;
    $(".progress-bar, .c100, .circular-chart, .circle").each(function (index) {
        th = $(this);
        dc = parseInt($(this).attr("data-color"), 10);
        bc = parseInt($(this).attr("circle-color"), 10);
        $.each(mc, function (name, value) {
            first = parseInt(name.split("-")[0], 10);
            second = parseInt(name.split("-")[1], 10);
            // console.log(between(dc, first, second));
            if (between(dc, first, second)) {
                th.addClass(value);
            }
            // console.log(between(bc, first, second));
            if (between(bc, first, second)) {
                th.addClass(value);
                $(".circular-chart").removeClass([
                    "bg-danger",
                    "bg-warning",
                    "bg-info",
                    "bg-success",
                ]);
            }
        });
    });
});
$("li.active").on("click", function () {
    $("li.active").click();
});
$(".carousel-control-prev").click(function () {
    $("li.active").trigger();
});

/* Google maps Begin */
function initMap() {
    var myLatLng = {
        lat: 49.8079356,
        lng: 24.0592995,
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 49.832689,
            lng: 24.012236,
        },
        zoom: 8,
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World! I`m Roman Matviy and i live in Lviv, Ukraine ;)",
    });
}
/* Google maps End */