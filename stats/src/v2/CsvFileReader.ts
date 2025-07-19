import fs from 'fs'


export class CsvFileReader{
    data: string[][] = [];

    constructor(public file_name: string) {}

    read(): void {
        this.data = fs.readFileSync(
            this.file_name,
            { encoding: 'utf-8' }
        )
            .split('\n')
            .map((row: string): string[] => row.split(','))
    }    
}