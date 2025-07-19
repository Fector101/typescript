// V1 ---------
// import { MatchReader } from "./v1/MatchReader";
// import { MatchResult } from "./v1/MatchResult";


// const reader = new MatchReader('football.csv')
// reader.read()


// V2 ---------
import { CsvFileReader } from "./v2/CsvFileReader";
import { MatchReader } from "./v2/MatchReader";
import { MatchResult } from "./v1/MatchResult";


const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
// console.log(reader.matches);


let manUnitedWins = 0;
for (let match of matchReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++
    }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++
    }
}

console.log(`Man United won ${manUnitedWins} games`);



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

