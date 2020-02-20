export class CountryDetails{
    public name: string;
    public alpha2Code: string;
    public callingCodes: string[];
    public capital: string;
    public region: string;
    public subregion: string;
    public population: number;
    public timezones: string[];
    public borders: string[];
    public nativeName: string;
    public currencies: Array<{code: string,name:string,symbol: string}>=[];
    public languages: Array<{name: string}>=[];
}