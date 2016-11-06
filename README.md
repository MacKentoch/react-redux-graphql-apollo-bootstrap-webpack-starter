Full ES2015 React + React-Router + Redux + GraphQL + Apollo + Bootstrap with Hot Reload and redux-devtools STARTER
==========

#### full ES6-ES2015

> My new `React + redux project starter`. This time I add `graphQL` and `Apollo Client` (*I better use Apollo Client than Relay*).
This starter also embeds `JWT token based` `authentication` (check [Route](https://github.com/MacKentoch/react-redux-graphql-apollo-bootstrap-webpack-starter/blob/master/src/app/routes/Route.js) to get an example of dealing with protected routes).



- *webpack is as simple as possible*
- *ReactJS is written with `optimization tricks` (stateless, pure render...).*
- *`pure front-end` = server independant (use whatever you want as server: NodeJS, Rails, .NET...)*
- *`redux` + `devTools` + `hot reload`= how did I developed without them before?*
- *graphQL makes API to be " `has been` "*
 - *no more struggle in redux with async thank to Apollo Client (you can even get rid of redux thunk or redux saga if you needed theses just for your asyncs. Otherwise keep them since they are nice :smile:)*


## Detailed Content

**Front:**
- React JS (15.x - [github :link:](https://github.com/facebook/react))
- Redux (*as you application grows managing state will be a serious concern, save pain with Redux*)
- apollo-client (*futur of API. Learn about this beast [here in officiel website](http://dev.apollodata.com/)*)
- React-Redux (*Redux is not specific to ReactJS, you could easily use it with Angular2 for instance*)
- Redux-devtools (*want to time travel your application State?*)
- React-Router-Redux (*previously named react-simple-router*)
- react-router (2.x- [github :link:](https://github.com/reactjs/react-router))
- Bootstrap (3.x - [github :link:](https://github.com/twbs/bootstrap))
- React-Bootstrap ([github :link:](https://github.com/react-bootstrap/react-bootstrap))
- font-awesome ([github :link:](https://github.com/FortAwesome/Font-Awesome))
- animate.css ([github :link:](https://github.com/daneden/animate.css))
- classnames ([github :link:](https://github.com/JedWatson/classnames))
- react-motion ([github :link:](https://github.com/chenglou/react-motion))
- Webpack ([github :link:](https://github.com/webpack/webpack))
- babel 6+ ([github :link:](https://github.com/babel/babel))
- react-addons-shallow-compare (*pure render mixin equivalent for ES6*)
- whatwg-fetch (*Why: because it is a fetch `Web API` polyfill*)

**Tool chain:**
- babel 6+
- eslint
- hot reload
- loaders
  - `js` / `jsx`
  - sass
  - css
  - json
  - images formats
  - svg and fonts formats
- autoprefixer (css and sass)

**tests:**
- Mocha
- Chai (*+ dirty-chai*)
- enzyme
- Sinon
- nyc


## Usage

### Prerequisite

#### Node JS version required is `>=6.5.0+`.
*Node JS 4.x will enter maintenance phase in April 2017 so you better upgrade now or soon to new LTS which is v6.x.*

> Better use [nvm](https://github.com/creationix/nvm) to manage your Node JS versions.

An Easy and fast way to get your graphql backend is to **register for free at [Scaphold](https://scaphold.io)**.

> This starter has been created with a scaphold free plan.

**Go to [Scaphold](https://scaphold.io) register and create an application**

<img src="https://raw.githubusercontent.com/MacKentoch/react-redux-graphql-apollo-bootstrap-webpack-starter/master/print_screens/create_app_modal.png" alt="create_app_modal preview" width="400px"></img>


- set `AppName`
- and a `description` (*so that after creating hundreds of applications you won't get lost*).

**You will be able to dicover predefined schemas. This starter will not need more than predefined (User):**

![schema_desiner_overview.png](https://raw.githubusercontent.com/MacKentoch/react-redux-graphql-apollo-bootstrap-webpack-starter/master/print_screens/schema_desiner_overview.png)

- you can define you own schema (*not needed for this starter to run*). But I suggest you have a look on well written `tutorials` to get more familiar with the schema designer.

**GraphiQL is integrated in Scaphold so discover and train predefined graphQL queries and mutations:**

![graphiQL_overview.png](https://raw.githubusercontent.com/MacKentoch/react-redux-graphql-apollo-bootstrap-webpack-starter/master/print_screens/graphiQL_overview.png)

### Configure starter application:

In Scaphold click on `My API` and `copy your application link`.

Then, past it (*to replace http://localhost:8080/graphql*) in your `networkInterface` in the app config (in `./src/app/config.index.js`):

```javascript
export const appConfig = {
  // apollo client:
  apollo: {
    networkInterface: 'http://localhost:8080/graphql'
  }
};
```

> from now you got all needed to run this starter

### Install dependencies

```bash
npm install
```

### run dev : hot reload mode (*+ redux-devtools*)

*General case:*

```bash
npm run start
```

*Windows - particular - case:*
```bash
npm run start-win
```

##### Note : redux-devtools shortcuts
- `ctrl+h`: to toggle devtools panel
- `ctrl+q`: to change devtools panel position (*by default: on the right*)


### bundle dev mode (*+ redux-devtools*)

*General case:*
```bash
npm run dev
```

*Windows - particular - case:*
```bash
npm run dev-win
```

### tests

*General case:*
```bash
npm run test
```

*Windows - particular - case:*
```bash
npm run test-win
```

### bundle production mode

*General case:*
```bash
npm run prod
```

*Windows - particular - case:*
```bash
npm run prod-win
```

## License

The MIT License (MIT)

Copyright (c) 2016 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
