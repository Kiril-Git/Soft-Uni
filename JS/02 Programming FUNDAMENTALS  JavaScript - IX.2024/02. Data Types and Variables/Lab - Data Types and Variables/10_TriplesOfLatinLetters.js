function triplesOfLatinLettersPrinter (input) {

    let num = Number(input)

    for (let i = 0; i < num; i++) {
        let firstChar = String.fromCharCode(97 +i)

        for (let j = 0; j < num; j++) {
            let secondChar = String.fromCharCode(97 +j)


            for (let k = 0; k < num; k++) {
                let thirdChar = String.fromCharCode(97 +k)


                console.log(`${firstChar}${secondChar}${thirdChar}`)
            }
        }
    }
}

triplesOfLatinLettersPrinter(2)