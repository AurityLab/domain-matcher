# Domain matcher
[![Build Status](https://api.travis-ci.org/AurityLab/domain-matcher.svg?branch=master)](https://travis-ci.org/AurityLab/domain-matcher)
[![npm](https://img.shields.io/npm/v/recaptcha-v3.svg)](https://www.npmjs.com/package/domain-matcher) 
[![npm type definitions](https://img.shields.io/npm/types/recaptcha-v3.svg)](https://www.npmjs.com/package/domain-matcher)

Check if given domain/url matches against domain patterns.

## Features
* Only ~3 kB (**~1.2 kB gzipped**).
* Suitable for browser environments.
* No additional dependencies.

## Install
With NPM:
```bash
$ npm install domain-matcher
```

With Yarn:
```bash
$ yarn add domain-matcher
```

## Usage
```javascript
import { match } from 'domain-matcher'

match('domain.matcher.com', '*.matcher.com') // => true
match('matcher.com', '*.matcher.com') // => false
match('matcher.com', '*.matcher.com', '*.com') // => true (Only '*.com' matches)
```
