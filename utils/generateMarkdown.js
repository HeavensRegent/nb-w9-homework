// function to generate markdown for README
function generateMarkdown({title, description, installation, usage, collaborators, contributing, tests, license, username, email}) {
  return `# ${title}
${licenses[license].badge}

## Description
${description}

## Table of Contents
* [Installation Instructions](<#installation instructions>)
* [Usage Information](<#usage information>)
* [Collaborators](<#collaborators>)
* [Contribution Guidelines](<#contribution guidelines>)
* [Test Instructions](<#test instructions>)
* [License](<#license>)
* [Questions](<#questions>)


## Installation Instructions
${installation}

## Usage Information
${usage}

## Collaborators
${collaborators}

## Contribution Guidelines
${contributing}

## Test Instructions
${tests}

## License
${license}

## Questions
View my Github Profile at [https://github.com/${username}](https://github.com/${username})
\nContact me at ${email}
`;
}

const licenses = {
  MIT: {
    badge: '[![GitHub license](https://img.shields.io/badge/license-MIT-green)](./license.txt)',
  },
  Apache: {
    badge: '[![GitHub license](https://img.shields.io/badge/license-Apache-blue)](./license.txt)',
  },
  GPL: {
    badge: '[![GitHub license](https://img.shields.io/badge/license-GPL-blue)](./license.txt)',
  }
}

module.exports = generateMarkdown;
