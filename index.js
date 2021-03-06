'use strict'
const path = require('path');
const generateList  = require(path.join(__dirname, 'bin', 'getOldContent'))
const upgradeQumlQuestion  = require(path.join(__dirname, 'bin', 'updateQUMLdata'))
const publishContent  = require(path.join(__dirname, 'bin', 'createItemset'))

//  to generate the list of content which doesn't have itemset attached
// generateList.generateContentList();

// fetch QUML version 0.5 version question attached to content and upgrade to QUML 1.0
upgradeQumlQuestion.updateQumlQuestion();

// create Itemset from items/question 
// update content with itemset
// publish content if status is live
publishContent.publishContent();

