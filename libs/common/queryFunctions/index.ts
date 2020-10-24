import {
    inserManyDBFactory,
    inserOneDBFactory,
    deleteDBFactory,
    getListDBFactory,
    getOneDBFactory,
    updateOneDBFactory,
    deleteManyDBFactory
} from './commonOperationDB'
let inserManyDB = inserManyDBFactory()
let inserOneDB=inserOneDBFactory()
let getListDB = getListDBFactory()
let getOneDB = getOneDBFactory()
let deleteDB=deleteDBFactory()
let updateOneDB=updateOneDBFactory()
let deleteManyDB=deleteManyDBFactory()
export {
    inserManyDB,
    inserOneDB,
    getListDB,
    getOneDB,
    deleteDB,
    updateOneDB,
    deleteManyDB
}