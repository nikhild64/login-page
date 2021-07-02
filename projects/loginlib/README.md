# Loginlib



This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

To use this, below are inputs you can use:

websiteName : string => Name to be shown on the login page
disableSignup : boolean  => to show sign up switch button
primaryColor : main background color Default is #60c6f1
secondaryColor : secondary color used for login container background color  Default is #ffde59

you will get the details when user click login/signup button as an event you can listen to it using property (loginDetails)
the details will be in format 
{'loginMode':this.activity,'userName':this.username,'password':this.password}

Using this you can validate the details by yourself, the basic validation is put in place it will not send details when the inputs are blank.

More features on the way

## Code scaffolding

Run `ng generate component component-name --project loginlib` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project loginlib`.
> Note: Don't forget to add `--project loginlib` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build loginlib` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build loginlib`, go to the dist folder `cd dist/loginlib` and run `npm publish`.

## Running unit tests

Run `ng test loginlib` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
