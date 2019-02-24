const path = require('path')
const execSync = require('child_process').execSync;
const shell = require("shelljs")
const libDirName = 'lib'
const originLibPath = `./distributor/${libDirName}`
const receiverPaths = {
  useEs5: './receiver/use-es5',
  useWebpack1: './receiver/use-webpack1'
}
const makeNodeModules = async () => {
  if(!shell.find('node_modules')) {
    await execSync('npm ci')
  }
}
const cpLibDir = (originDir, targetDir) => {
  shell.rm('-rf', targetDir)
  shell.cp(
    '-rf', 
    originDir, 
    targetDir
  )
}
;(async()=>{
  shell.cd('distributor')
  await makeNodeModules()
  await execSync('npm run build')
  shell.cd('../')
  cpLibDir(originLibPath, `${receiverPaths.useWebpack1}/src/${libDirName}`)
  cpLibDir(originLibPath, `${receiverPaths.useEs5}/asset/${libDirName}`)
  shell.cd(receiverPaths.useWebpack1)
  await makeNodeModules()
  await execSync('npm run build')
  shell.cd('../../')
})()