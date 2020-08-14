let listaNum = [16, 23, 25, 36, 37, 42 ]


listaNum.forEach((x, y)=>{ 
    console.log(`A posiçao ${y} tem o valor ${x}`)
})

//------------------------------------------------------------------

listaNum.map((x,y)=>{
    console.log(`A posiçao ${y} tem o valor ${x}`)
})

//OBS: Pesquisar qual a diferença entre forEach e map? 

/* Resumindo: tanto o forEach como o Map, por baixo dos panos, 
tem um looping for implementado. No entanto o Map retorna um novo 
array com a mesma quantidade de elementos. Logo é possível modificar 
o array original através de um map. 
*/ 


