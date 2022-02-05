import { getProgram } from './project';

const program = getProgram('/home/smolijar/Projects/clean-tree/tsconfig.json')

const projectFiles = program.getSourceFiles().filter(f => !f.fileName.match('node_modules'))
const statements = projectFiles.flatMap(pf => pf.statements)
console.log(statements)