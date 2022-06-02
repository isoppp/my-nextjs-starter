const path = require('path')
const changeCase = require('change-case')
const glob = require('glob')

const componentRootDirs = [
  ...glob.sync('src/components/!(pages)/', { dot: false }),
  ...glob.sync('src/+(features)/!(_*)/components', { dot: false }),
]
const componentDirs = [
  ...componentRootDirs.filter((d) => d !== 'src/components'),
  ...componentRootDirs.map((_path) => glob.sync(`${_path}/**/[!A-Z]*/`, { dot: false })).flat(),
]

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'enter component name(Foo)',
        validate: (input) => input !== '',
      },
      {
        type: 'autocomplete',
        name: 'dir',
        message: 'select directory',
        choices: componentDirs,
      },
      {
        type: 'input',
        name: 'subdir',
        message: '(optional)enter sub dir path(foo/bar)',
      },
      {
        type: 'confirm',
        name: 'hasChildren',
        message: 'use children?(FC?)',
        initial: false,
      },
      {
        type: 'confirm',
        name: 'hasHooks',
        message: 'use hooks?',
        initial: false,
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { dir, subdir, name } = answers
      const fullPath = path.join(process.cwd(), dir, subdir, changeCase.pascal(name))
      const storyPath = [
        dir
          .replace('src/components/', '')
          .replace('src/', '')
          .replace('/components', '')
          .replace('features/', '')
          .replace(/\/$/, ''),
        subdir,
      ]
        .filter(Boolean)
        .join('/')
      return { ...answers, fullPath, storyPath }
    })
  },
}
