// function to generate markdown for README
function generateMarkdown({title, description, installation, usage, collaborators, contributing, tests, license, username, email}) {
  let githubURL = 'https://github.com/'
  //Split the collaborators by a comma, add the markdown url stuff around the name, join by new lines
  let collabString = collaborators.split(',').map(collab => {collab = collab.trim(); return `[${githubURL}${collab}](${githubURL}${collab})`}).join('  \n')

  return `# ${title}
${licenses[license].badge}

## Description
${description}

## Table of Contents
* [Installation Instructions](<#installation-instructions>)
* [Usage Information](<#usage-information>)
* [Collaborators](<#collaborators>)
* [Contribution Guidelines](<#contribution-guidelines>)
* [Test Instructions](<#test-instructions>)
* [License](<#license>)
* [Questions](<#questions>)


## Installation Instructions
${installation}

## Usage Information
${usage}

## Collaborators
${collabString}

## Contribution Guidelines
${contributing}

## Test Instructions
${tests}

## License
${license}

## Questions
View my Github Profile at [https://github.com/${collaborators.split(',')[0]}](https://github.com/${collaborators.split(',')[0]})
\nContact me at ${email}
`;
}

const licenses = {
  'MIT License': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-MIT-green)](./LICENSE.txt)',
  },
  'Apache License 2.0': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-Apache--2.0-blue)](./LICENSE.txt)',
  },
  'GNU General Public License v3.0': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-GPL--3.0-blue)](./LICENSE.txt)',
  },
  'Mozilla Public License 2.0': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-MPL--2.0-blue)](./LICENSE.txt)',
  },
  'GNU Affero General Public License v3.0': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-AGPL--3.0-blue)](./LICENSE.txt)',
  },
  'The Unlicense': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-unlicense-blue)](./LICENSE.txt)',
  },
  'GNU Lesser General Public License v3.0': {
    badge: '[![GitHub license](https://img.shields.io/badge/license-LGPL--3.0-blue)](./LICENSE.txt)',
  },
  
}

const githubCommonLicenses = [
  {
    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZW1pdA=="
  },
  {
    "key": "lgpl-3.0",
    "name": "GNU Lesser General Public License v3.0",
    "spdx_id": "LGPL-3.0",
    "url": "https://api.github.com/licenses/lgpl-3.0"
  },
  {
    "key": "mpl-2.0",
    "name": "Mozilla Public License 2.0",
    "spdx_id": "MPL-2.0",
    "url": "https://api.github.com/licenses/mpl-2.0"
  },
  {
    "key": "agpl-3.0",
    "name": "GNU Affero General Public License v3.0",
    "spdx_id": "AGPL-3.0",
    "url": "https://api.github.com/licenses/agpl-3.0"
  },
  {
    "key": "unlicense",
    "name": "The Unlicense",
    "spdx_id": "Unlicense",
    "url": "https://api.github.com/licenses/unlicense"
  },
  {
    "key": "apache-2.0",
    "name": "Apache License 2.0",
    "spdx_id": "Apache-2.0",
    "url": "https://api.github.com/licenses/apache-2.0"
  },
  {
    "key": "gpl-3.0",
    "name": "GNU General Public License v3.0",
    "spdx_id": "GPL-3.0",
    "url": "https://api.github.com/licenses/gpl-3.0"
  }
]

module.exports = {generateMarkdown, githubCommonLicenses};
