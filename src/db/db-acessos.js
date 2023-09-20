
export const listAcessos = () => {
    return new Promise((resolve, reject) => {
        const db = openDatabase('AcessosDB', '1.0', 'Meu Banco de Dados', 2 * 1024 * 1024);

        db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Registros', [], function (tx, result) {
            resolve(result.rows);
        }, function (tx, error) {
            reject(error);
        });
        });
    });
};

export const createAcesso = ({branch, email, projeto, tipo, porta}) => {
    const db = openDatabase('AcessosDB', '1.0', 'Meu Banco de Dados', 2 * 1024 * 1024);
    
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Registros (id INTEGER PRIMARY KEY AUTOINCREMENT, branch TEXT, email TEXT, projeto TEXT, tipo TEXT, porta TEXT)');
    });

    db.transaction(function (tx) {
        tx.executeSql('INSERT INTO Registros (branch, email, projeto, tipo, porta) VALUES (?, ?, ?, ?, ?)', [branch, email, projeto, tipo, porta]);
    });

}

