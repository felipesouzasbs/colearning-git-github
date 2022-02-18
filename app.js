const paises = []
paises.push('Brasil', 'Argentina', 'Colombia','Peru','Chile', 'Equador', 'Bosnia', 'Venezuela', 'Bolívia', 'Uruguai', 'Guiana', 'Suriname', 'Paraguai', 'Guiana Francesa'
)
//for (const i = 0;i <= paises.lenght; i++){
//    console.log(paises[i])
//}
//paises.forEach((pais) =>{
//    return console.log(pais)
//})

for (let pais of paises){
    console.log(pais)
}