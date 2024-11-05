const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

       
        function displayResult(message, value) {
            document.getElementById("output").innerHTML += `<p>${message} ${value}</p>`;
        }

        // 1
        const positiveElements = array.filter(num => num > 0);
        const sumPositive = positiveElements.reduce((sum, num) => sum + num, 0);
        const countPositive = positiveElements.length;
        displayResult("Сума позитивних елементів:", sumPositive);
        displayResult("Кількість позитивних елементів:", countPositive);

        // 2
        const minElement = Math.min(...array);
        const minIndex = array.indexOf(minElement) + 1;
        displayResult("Мінімальний елемент:", minElement);
        displayResult("Порядковий номер мінімального елемента:", minIndex);

        // 3
        const maxElement = Math.max(...array);
        const maxIndex = array.indexOf(maxElement) + 1;
        displayResult("Максимальний елемент:", maxElement);
        displayResult("Порядковий номер максимального елемента:", maxIndex);

        // 4
        const countNegative = array.filter(num => num < 0).length;
        displayResult("Кількість негативних елементів:", countNegative);

        // 5
        const oddPositiveCount = positiveElements.filter(num => num % 2 !== 0).length;
        displayResult("Кількість непарних позитивних елементів:", oddPositiveCount);

        // 6
        const evenPositiveCount = positiveElements.filter(num => num % 2 === 0).length;
        displayResult("Кількість парних позитивних елементів:", evenPositiveCount);

        // 7
        const sumEvenPositive = positiveElements.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
        displayResult("Сума парних позитивних елементів:", sumEvenPositive);

        // 8
        const sumOddPositive = positiveElements.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
        displayResult("Сума непарних позитивних елементів:", sumOddPositive);

        // 9
        const productPositive = positiveElements.reduce((product, num) => product * num, 1);
        displayResult("Добуток позитивних елементів:", productPositive);

        // 10
        const maxElementOnlyArray = array.map(num => (num === maxElement ? num : 0));
        displayResult("Масив з обнуленими елементами, крім максимального:", `[${maxElementOnlyArray.join(", ")}]`);