# Orca

This README outlines specifics about the website for the aquarium controller. The purpose of the website is to act as a cloud controller / storage device to store data. Eventually the Raspberry-Pi will allow for full functionality without internet support once we choose to implement an LCD or local webhost for access.

The cloud based system is two-part: 
1. A public facing website that provides basic statistics, video, latest parameters, stock list etc. 
    - This is perfect for someone to share with their friends, family, or youtube followers for example
2. The other piece is accessible anywhere but requires Authentication to access. This is a close representation of the panel used on the standalone controller with some subtle differences.
    - For a detailed guide on the physical components and administration panel of the controller please visit the [Controller README](../controller/README.md).

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Will be replaced when converted to React

>
>### Installation
>
>* `git clone <repository-url>` this repository
>* `cd orca`
>* `npm install` or `yarn install`
>
>### Running / Development
>
>* `ember serve`
>* Visit your app at [http://localhost:4200](http://localhost:4200).
>* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).
>
>#### Code Generators
>
>Make use of the many generators for code, try `ember help generate` for more details
>
>#### Running Tests
>
>* `ember test`
>* `ember test --server`
>
>#### Building
>
>* `ember build` (development)
>* `ember build --environment production` (production)
>
>#### Deploying
>
>After the build copy the `dist` folder onto your server
>
>### Further Reading / Useful Links
>
>* [ember.js](https://emberjs.com/)
>* [ember-cli](https://ember-cli.com/)
>* Development Browser Extensions
>  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
>  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/

