# React-Redux-Chrome Extension LinkedIn Parser
Parse a companies and profile pages from LinkedIn via Chrome Extention

[![dependencies Status](https://david-dm.org/distolma/react-chrome-linkedin-parser/status.svg)](https://david-dm.org/distolma/react-chrome-linkedin-parser)
[![devDependencies Status](https://david-dm.org/distolma/react-chrome-linkedin-parser/dev-status.svg)](https://david-dm.org/distolma/react-chrome-linkedin-parser?type=dev)
[![bitHound Overall Score](https://www.bithound.io/github/distolma/react-chrome-linkedin-parser/badges/score.svg)](https://www.bithound.io/github/distolma/react-chrome-linkedin-parser)

## Why?
This parser created for consumption of one company. The reason we don't use LinkedIn API that because they decided to reduce access to profile page and create *partners* for increase access...

From *2015* LinkedIn API get worse, that's reason why we creacted parsing tool for search new clients for company.

And also it's a great practice for my web developming.

## What?
It's a small extension for Chrome browser created by React, Redux and [React-Chrome-Redux](https://github.com/tshaddix/react-chrome-redux) (a set of utilities for building Redux applications in Google Chrome extensions).

For boilerplate i use [Chrome-Extension-Webpack-Boilerplate](https://github.com/samuelsimoes/chrome-extension-webpack-boilerplate) with my modifications. I'a added a React, Redux, [Pug](https://github.com/pugjs/pug), SASS. With all dependencies you can acquainted in ```package.json```.

## What limitations?
This product is not ready. It's in developming. To get information you can download that in ```.csv``` data format.

In the future, i will be connect extension to database and it's a private information, i wouldn't make cmmit of this part of code. But you can feel free to change this extension as you like or create merge.

## How to use?
For development you can run ```npm``` command.
```
$ npm start
```

Then turn on developer mode in Chrome.

![Developer mode](https://cloud.githubusercontent.com/assets/16022556/24241410/6aeff536-0fbd-11e7-9878-a5928a2eecdb.jpg)


Load ```build``` folder to Chrome.

![Load to Chrome](https://cloud.githubusercontent.com/assets/16022556/24241409/6aeed2be-0fbd-11e7-8a9b-add1015163f8.jpg)

Extension is ready.

![Load to Chrome](https://cloud.githubusercontent.com/assets/16022556/24241408/6aec14ac-0fbd-11e7-844a-b1cdd4683b4a.jpg)

---

To use extension for searching companies drag'n'drop ```.csv``` file. This file would be like
```

	Apple,apple.com
	Facebook,facebook.com
	Company,company.domain

```
This structure created for searching companies and compare result with domain. In *Industries list* chose all industries you would to find.

![4](https://cloud.githubusercontent.com/assets/16022556/24241600/04196580-0fbe-11e7-9a56-749b293d8362.jpg)

---

To build for production use:
```
$ npm run build
```
