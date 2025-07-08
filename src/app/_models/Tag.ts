export class Tag{

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('Typescript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'grey');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'red');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly ASPNET = new Tag('ASP.Net', 'purple');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');
    static readonly REACT = new Tag('React', 'blue');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#336791');
    static readonly MYSQL = new Tag('MySQL', 'magenta');
    static readonly SPRINGBOOT = new Tag('SpringBoot', 'green');

    private constructor(private readonly key: String, public readonly color: String){

    }

    toString(){
        return this.key;
    }
}
