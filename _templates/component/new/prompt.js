const fs = require('fs')
const path = require('path')
const changeCase = require('change-case')

function getAllDirs(dirPaths, depth, count = 0, allDirs = []) {
  const temp = []
  for (const dirPath of dirPaths) {
    const dirents = fs.readdirSync(dirPath, { withFileTypes: true })
    const dirs = dirents
      .flat()
      .filter((dirent) => dirent.isDirectory())
      .filter((dirent) => !/^[A-Z].*/.test(dirent.name))
      .map((dirent) => path.join(dirPath, dirent.name))
    temp.push(dirs)
  }

  const dirs = temp.flat()

  if (dirs.length === 0 || count >= depth) {
    return allDirs
  }
  return getAllDirs(dirs, depth, ++count, [...allDirs, dirs].flat())
}

const dirs = getAllDirs([path.join(process.cwd(), 'src/components')], 10).map((p) => p.replace(process.cwd() + '/', ''))

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
        choices: dirs,
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
      const storyPath = [dir.replace('src/components/', ''), subdir].filter(Boolean).join('/')
      return { ...answers, fullPath, storyPath }
    })
  },
}
