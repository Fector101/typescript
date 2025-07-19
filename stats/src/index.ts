import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const reader = new CsvFileReader('football.csv')
reader.read()



let manUnitedWins = 0;
for (let match of reader.data){
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

