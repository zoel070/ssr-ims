exports.seed = function (knex) {
  return knex('article').insert([{
    user_id: 1,
    kind_id: 1,
    title: 'Node.js',
    content: '<div style="white-space: nowrap;">Node.js is an open-source, cross-platform JavaScript runtime environment. For information on using Node.js, see the <a href="https://nodejs.org/" target="_blank">Node.js website</a>.</div><div style="white-space: nowrap;">The Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.</div><div style="white-space: nowrap;">Contributors are expected to act in a collaborative manner to move the project forward. We encourage the constructive exchange of contrary opinions and compromise. The TSC reserves the right to limit or block contributors who repeatedly act in ways that discourage, exhaust, or otherwise negatively affect other participants.</div><div style="white-space: nowrap;">This project has a <a href="https://nodejs.org/en/about/code-of-conduct/" target="_blank">Code of Conduct</a>.</div>',
    updated_time: '2023-05-16 14:30:53',
  },
  {
    user_id: 1,
    kind_id: 1,
    title: 'Auto-GPT v0.3.1',
    content: '<div style="white-space: nowrap;">Challenges:</div><div style="white-space: nowrap;">- Information retrieval challenges have been created and added to the wiki.</div><div style="white-space: nowrap;">- Memory challenges B and C have been created and their documentations have been fixed.</div><div style="white-space: nowrap;">Documentation:</div><div style="white-space: nowrap;">- Docker-compose 1.29.0 is now required, as documented.</div><div style="white-space: nowrap;">- Path to the workspace directory in the setup guide has been corrected.</div><div style="white-space: nowrap;">- Memory setup links have been updated.</div><div style="white-space: nowrap;">Log:</div><div style="white-space: nowrap;">- Log functionality has been improved for better understanding and easier summarization.</div><div style="white-space: nowrap;">- User input is now logged in the logs/Debug Folder.</div><div style="white-space: nowrap;">Other:</div><div style="white-space: nowrap;">- Edge browser support has been added using EdgeChromiumDriverManager.</div><div style="white-space: nowrap;">- Users now have the ability to disable commands via the .env file.</div><div style="white-space: nowrap;">- Run scripts for both Windows (.bat) and Unix (.sh) have been updated.</div><div style="white-space: nowrap;">BugFix:</div><div style="white-space: nowrap;">- DuckDuckGo dependency has been updated, with a minimum version set to 2.9.5.</div><div style="white-space: nowrap;">- Package versions parsing has been enabled for forced upgrades.</div><div style="white-space: nowrap;">- Docker volume mounts have been fixed.</div><div style="white-space: nowrap;">- A fix was made to the plugin.post_planning call.</div><div style="white-space: nowrap;">- A selenium driver object reference bug in the browsing results was fixed.</div><div style="white-space: nowrap;">- JSON error in summary_memory.py has been handled.</div><div style="white-space: nowrap;">- Dockerfile has been updated to add missing scripts and plugins directories.</div><div style="whit',
    updated_time: '2023-05-16 14:30:53',
  },
  {
    user_id: 1,
    kind_id: 1,
    title: 'egg',
    content: '<div style="white-space: nowrap;">Features:</div><div style="white-space: nowrap;">- Built-in Process Management</div><div style="white-space: nowrap;">- Plugin System</div><div style="white-space: nowrap;">- Framework Customization</div><div style="white-space: nowrap;">- Lots of plugins</div><div style="white-space: nowrap;">Quickstart:</div><div style="white-space: nowrap;">Follow the commands listed below.</div><div style="white-space: nowrap;">$ mkdir showcase && cd showcase</div><div style="white-space: nowrap;">$ npm init egg --type=simple</div><div style="white-space: nowrap;">$ npm install</div><div style="white-space: nowrap;">$ npm run dev</div><div style="white-space: nowrap;">$ open http://localhost:7001</div><div style="white-space: nowrap;">Node.js >= 14.20.0 required.</div><div style="white-space: nowrap;">Documentations:</div><div style="white-space: nowrap;">- Documentations</div><div style="white-space: nowrap;">- Plugins</div><div style="white-space: nowrap;">- Frameworks</div><div style="white-space: nowrap;">- Examples</div>',
    updated_time: '2023-05-16 14:30:53',
  },
  {
    user_id: 1,
    kind_id: 2,
    title: 'koa',
    content: 'Koa is an expressive HTTP middleware framework for Node.js, designed to make web applications and APIs more enjoyable to write. It features a middleware stack that flows in a stack-like manner, allowing you to perform actions downstream then filter and manipulate the response upstream. Koas small ~570 SLOC codebase only integrates methods that are common to nearly all HTTP servers, such as content negotiation, normalization of node inconsistencies, and redirection. Note that Koa is not bundled with any middleware.',
    updated_time: '2023-05-16 14:30:53',
  },
  {
    user_id: 1,
    kind_id: 2,
    title: 'egg',
    content: '<div style="white-space: nowrap;">Features:</div><div style="white-space: nowrap;">- Built-in Process Management</div><div style="white-space: nowrap;">- Plugin System</div><div style="white-space: nowrap;">- Framework Customization</div><div style="white-space: nowrap;">- Lots of plugins</div><div style="white-space: nowrap;">Quickstart:</div><div style="white-space: nowrap;">Follow the commands listed below.</div><div style="white-space: nowrap;">$ mkdir showcase && cd showcase</div><div style="white-space: nowrap;">$ npm init egg --type=simple</div><div style="white-space: nowrap;">$ npm install</div><div style="white-space: nowrap;">$ npm run dev</div><div style="white-space: nowrap;">$ open http://localhost:7001</div><div style="white-space: nowrap;">Node.js >= 14.20.0 required.</div><div style="white-space: nowrap;">Documentations:</div><div style="white-space: nowrap;">- Documentations</div><div style="white-space: nowrap;">- Plugins</div><div style="white-space: nowrap;">- Frameworks</div><div style="white-space: nowrap;">- Examples</div>',
    updated_time: '2023-05-16 14:30:53',
  },
  {
    user_id: 1,
    kind_id: 3,
    title: 'Node.js',
    content: '<div style="white-space: nowrap;">Node.js is an open-source, cross-platform JavaScript runtime environment. For information on using Node.js, see the <a href="https://nodejs.org/" target="_blank">Node.js website</a>.</div><div style="white-space: nowrap;">The Node.js project uses an open governance model. The OpenJS Foundation provides support for the project.</div><div style="white-space: nowrap;">Contributors are expected to act in a collaborative manner to move the project forward. We encourage the constructive exchange of contrary opinions and compromise. The TSC reserves the right to limit or block contributors who repeatedly act in ways that discourage, exhaust, or otherwise negatively affect other participants.</div><div style="white-space: nowrap;">This project has a <a href="https://nodejs.org/en/about/code-of-conduct/" target="_blank">Code of Conduct</a>.</div>',
    updated_time: '2023-05-16 14:30:53',
  },
  ])
};
