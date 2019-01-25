

# Angular :

## Utilitaire :

* Scaffoldeur
* node+npm ( >= 6)
* Framework CSS
* Outil de documentation `compodoc`

## Web Component : 

Possibilé d'enrichier HTML de nouveau TAG/Balise perosnnalisé
* Logique propre
* Un template
* CSS Scoped

## npm : 

* fonctionne avec un fichier `package.json`
* Trois usages :
    1. Gestion des dépendances
    2. Description du projet
    3. Les run-script

**Créer le fichier `package.json`**
> `npm init -y`

**Installation globale/locale**
> `npm i [--global] reference`
La réfénrece peut etre :
* Un nom resolu sur le registry.
* Une URL
* Une chemin de fichier.

## compodoc :

**Installation**

Dans le projet concerné :
> `npm i @compodoc/compodoc`

**Modifier le `package.json`**

```json
  "scripts": {
    "ng": "ng",
    ...
    "compo":"compodoc -p ./src/tsconfig.app.json -w -s -o"
  },
```

**Générer la doc**

> `npm run compo`

## JavaScript :

> Vision : ES5 > ES6/2015 (ES2017) > TypeScript

ES6/2017 apporte plus de concision dans la redaction du code.

### Syntaxe ES6

* Arrow Function  `()=>true` 
* Mot clé `let const class` **Au re`var` `var`** 
* `class` 
* Itération Fonctionnelle :
    * `[].map(callback);`
    * `[].filter(callback);`
    * `[].sort(callback);`
    * `[].some(callback);`
    * `[].every(callback);`
    * `[].reduce(callback);`
    * `[].forEach(callback);` 

### Syntaxe typeScript

* Typage Statique `let myVar:string` ou par assignation `let myVar =''`
     * Type Primitfs 
        * `string`
        * `number`
        * `boolean`
     * Complex
        * `Date`
        * `Array`
        * `Object`
        * `Map`
        * `Set`
* Enrichissement POO
    * `interface` contrat de forme
    * `private/public`
    * `implements`

## Angular Cli :

La commande `ng` permet lancer l'utilitaire `@angular/cli`

**Installation**

> `npm i -g @angular/cli`

**Création nouveau projet**

> `ng new PROJECT_NAME`

**Lancer le  projet en mode développement**

> `npm start`

* Démarre le projet.
* Démarre un serveur web (webpack dev server).
* Lance le workflow : (webpack) transpilation TypeScript / HTML / CSS.

**Création d'élément applicatif**

> La commande `ng genereate SCHEMATICS PATH/NAME` permet de générer des élément d'application.
> `SCHEMATICS` c'est le modèle `PATH` le chemin et `NAME` le nom souhaité

* Composant `ng g c myComponent` ou `ng generate component myComponent`
* Composant avec export  `ng g c myComponent --export` 
* Module  `ng g m myModule [-m=myOtherModuleIwantToBeConnectedTo]` 
* Service  `ng g s myService` 
* Directive  `ng g d myDirective [--export]` 
* Pipe  `ng g p myPipe [--export]` 

## Application Angular :

> Component Based Architecture

Une application est un arbre de composant.

Un composant WEB est une unité faite de :
* HTML - Template
* CSS - Présentation
* JS - Logic du template

Un composant peut implementer les `callback` du cycle de vie :
<br>
![](data:image/png;base64,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)
<br>

### Syntaxe de template des composants

* HTML
* Directive Angular `*ngIf, *ngFor` - `<ng-content></ng-content>`
* Composant `<app-my-component></app-my-component>`
* Binding Sur Event :`<mabalise (event)="maMethodeouExpression"></mabalise>` eg. `<div (click)="doStuff($event)"></div>`
* Binding sur attribut `<mabalise [title]="getTitle()"></mabalise>` 
* Binding sur texte ` {{expression}}` 

### Element applicatif angular


* Module : *Organiser les component directive et pipe en ensembles*
    * Composant : *Découper la User Interface en petites fonctionnalités*
    * Directive : *Enrichier un composant*
    * Pipe : *Regle de transformation normalisée*  
* Service  : *Logique Métier*

### Notion de feature
Représente un entité fonctionnelle indépendante.


> SOLIDes de Platon
> 
> * Dode - Univers  -Module
>    * Hexa - terre - Component
>    * Octo - air - Pipe
>    * Tetra - feu  -Directive
> * Ico - eau  - Services

## Angular Decorateur

* `@Injectable()`
* `@NgModule()`
* `@Component()`
* `@HostListener()`
* `@Pipe()`
* `@HostBinding()`
* `@Input()`
* `@Attribute()`
* `@Directive()`
* `@Inject()`
    * `@Optional()`
* `@Output()` avec `EventEmitter`

## Angular Injection de dépendances.

> Expression déclarative de dépendance entre classe résolue qutomatique par l'injecteur inter d'angular.


```ts

/**...*/

constructor( @Inject(GiveMeThisService) myService:GiveMeThisService ){

}

/** ou */
constructor( myService:GiveMeThisService ){

}

/** possiblement */
constructor( @Optional () myService:GiveMeThisIfPossibleService ){

}

/** possiblement */
constructor( private myService:GiveMeThisService ){
    // L'utilisation de private/public devant le parametre a pour effet de le mapper en membre de la casse
    // this.myService =  myService
}
```

> Par défauts les services sont injéctés en **Singleton**