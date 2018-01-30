# opex

This README outlines specifics about the website for the aquarium controller. The purpose of the website is to act as a cloud controller / storage device to store data. Eventually the Raspberry-Pi will allow for full functionality without internet suppose once we choose to implement an LCD or local webhost for access.

This README will walk you through getting the website up and running both locally and on shared hosting. Please visit the [Controller README](https://github.com/bhcmoney/opex/blob/ember/controller/README.md) for a detailed guide on the physical components of the controller.

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

### Installation

* `git clone <repository-url>` this repository
* `cd opex`
* `npm install`

### Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

#### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

#### Running Tests

* `ember test`
* `ember test --server`

#### Building

* `ember build` (development)
* `ember build --environment production` (production)

#### Deploying

After the build copy the `dist` folder onto your server

### Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
