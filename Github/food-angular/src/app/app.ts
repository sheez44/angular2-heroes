import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'food-menu',
    template: '<div class="container">' +
    '<h1>{{title}}</h1> <h2>{{hero}} details!</h2>' +
    '</div>'
})
class AppComponent {
    public title = 'Tour of Heroes';
    public hero = 'Windstorm'
}

bootstrap(AppComponent);