import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'food-menu',
    template: '<div class="container">' +
    '<h1>Try out our delicious meals!</h1>' +
        '<h2>Angular2</h2>' +
    '</div>'
})
class AppComponent { }

bootstrap(AppComponent);