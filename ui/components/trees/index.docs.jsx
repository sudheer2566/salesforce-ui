/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

const React = require('react');
const ComponentDocs = require('app_modules/site/components/page/component/docs');
const CodeClass = require('app_modules/site/components/code-class');

module.exports = (
  <ComponentDocs>
    <p className="site-text-introduction">A tree is visualization of a structure hierarchy. A branch can be expanded or collapsed.</p>
    <p>A tree is composed of three core elements, <CodeClass className="tree" />, <CodeClass className="tree__item" />, and <CodeClass className="tree__branch" />. The tree wrapper, the outer most parent <code>ul</code>, will receive the class <CodeClass className="tree" />. This class will be used for scoping a tree, which allows for particular styling based on states in which the tree may enter.</p>

    <p>Whenever the tree has a nested group, the <code>li</code> element should receive the class <CodeClass className="tree__branch" />. This class will add appropiate styling to decendent <CodeClass className="tree__item" /> elements. A helper class of <CodeClass className="is-open" /> and <CodeClass className="is-closed" /> will need to be toggled on the list item node if the decendent groups are visible or not visible.</p>

    <p>A tree will need helper classes added and removed to help structure the layout. Each child node list needs <CodeClass className="tree__group" /> applied along with the class <CodeClass className="nested" /> to indicate the distinct grouping is nested within another node of the tree. The <CodeClass className="nested" /> group will need to toggle the following classes, <CodeClass className="collapsed" /> and <CodeClass className="expanded" /> based on its state.</p>

    <p>A <CodeClass className="tree__item" /> is any element of the tree that is a single node within a <CodeClass className="tree__group" />. To achieve interactions demostrated in the demo, some helper classes are being added and removed based on actions to the list item node. To achieve the desired hover and focus states, applying the <CodeClass className="is-hovered" /> and <CodeClass className="is-focused" /> class helpers to the <code>li</code> on its respective interactions. If an item is selected and want to demostrate that state, applying the <CodeClass className="is-selected" /> helper class will give you this outcome.</p>
  </ComponentDocs>
);
