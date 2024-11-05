let array = [];

        function createArray() {
            const length = document.getElementById("arrayLength").value;
            if (length > 0) {
                document.getElementById("arrayElements").style.display = "block";
                const elementsInput = document.getElementById("elementsInput");
                elementsInput.innerHTML = ''; 

               
                for (let i = 0; i < length; i++) {
                    const input = document.createElement("input");
                    input.type = "number";
                    input.placeholder = `Елемент ${i + 1}`;
                    input.id = `element${i}`;
                    elementsInput.appendChild(input);
                }
            }
        }

        function sortAndModifyArray() {
            const length = document.getElementById("arrayLength").value;
            array = [];
            for (let i = 0; i < length; i++) {
                const value = parseInt(document.getElementById(`element${i}`).value);
                array.push(value);
            }
            displayArray("Початковий масив: ", array);

            array.sort((a, b) => a - b);
            displayArray("Відсортований масив: ", array);

            array.splice(2, 3);
            displayArray("Масив після видалення елементів з 2 по 4: ", array);
        }

        function displayArray(message, arr) {
            const output = document.getElementById("output");
            output.innerHTML += `<p>${message} [${arr.join(", ")}]</p>`;
        }