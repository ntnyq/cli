#!/usr/bin/env node
'use strict'

const path = require('path')
const importJsx = require('import-jsx')
const React = require('react')
const { render } = require('ink')

const ui = importJsx('./ui')

render(React.createElement(ui))
