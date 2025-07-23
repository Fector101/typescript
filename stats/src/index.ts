// V1 ---------
// import { MatchReader } from "./v1/MatchReader";
// import { MatchResult } from "./v1/MatchResult";


// const reader = new MatchReader('football.csv')
// reader.read()


// V2 ---------
import { MatchReader } from "./v2/MatchReader";
import { Summary } from "./v2/Summary";

const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)



// Bad Code ---------

// const matches = fs.readFileSync('football.csv', { encoding: 'utf-8' })
//                 .split('\n')
//                 .map((each:string): string[]=>each.split(','))

// let manUnitedWins = 0;
// for (let match of matches){
//     if(match[1] === 'Man United' && match[5] === 'H'){
//         manUnitedWins++
//     }else if(match[2] === 'Man United' && match[5] === 'A'){
//         manUnitedWins++
//     }
// }
// console.log(`Man United won ${manUnitedWins} games`);

