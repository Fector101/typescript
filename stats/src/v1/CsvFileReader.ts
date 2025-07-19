import fs from 'fs'


export abstract class CsvFileReader<TypeOfData>{
    data: TypeOfData[] = [];

    constructor(public file_name: string) {}
    abstract mapRow(row: string[]): TypeOfData;

    read(): void {
        this.data = fs.readFileSync(
            this.file_name,
            { encoding: 'utf-8' }
        )
            .split('\n')
            .map((row: string): string[] => row.split(','))
            .map(this.mapRow)
    }    
}