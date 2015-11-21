import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'food-menu',
    template: `
    <div class="container">
        <h1>{{title}} <span class="label label-default">!!!</span></h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id:</label>{{hero.id}}</div>
        <label for="name-editor">name:</label>
        <div class="input-group">
            <div><input id="name-editor" type="text" class="form-control" [(ng-model)]="hero.name" placeholder="name"></div>
        </div>
    </div>
    `,
    directives: [FORM_DIRECTIVES]
})

class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Paladin Danse'
    }
}

class Hero {
    id: number;
    name: string;
}

bootstrap(AppComponent);