function fixFiles(files) {
  let contador = 0;
  const newArr = files.reduce(function (allElement, element) {
    if (element in allElement) {
      // cada vez que se repite se agrega uno
      allElement[element]++
    }
    else {
      // primera vez se encuentra el elemento en el array
      allElement[element] = 1
    }
    return allElement
    
  }, [])
  return newArr
}


const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files))

